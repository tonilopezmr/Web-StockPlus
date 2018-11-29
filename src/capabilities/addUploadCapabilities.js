const convertFileToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});


export const addUploadCapabilities = requestHandler => (type, resource, params) => {
    console.log("type: " + type + " resource: "+ resource)
    if (type === 'CREATE' && resource === 'items') {
        console.log(params)
        if (params.data.photo && params.data.photo.length == 1) {
            // only freshly dropped pictures are instance of File
            const formerPictures = params.data.photo.filter(p => !(p.rawFile instanceof File));
            const newPictures = params.data.photo.filter(p => p.rawFile instanceof File);

            return Promise.all(newPictures.map(convertFileToBase64))
                .then(base64Pictures => base64Pictures)
                .then(transformedNewPictures => requestHandler(type, resource, {
                    ...params,
                    data: {
                        ...params.data,
                        photo: [...transformedNewPictures, ...formerPictures],
                    },
                }));
        }
    }

    return requestHandler(type, resource, params);
}