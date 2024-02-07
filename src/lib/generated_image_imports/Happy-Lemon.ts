const importImages = async () => {
    const modules = import.meta.glob('../images/happy_lemon/*.png') as Record<string, () => Promise<{ default:string }>>;
    let importedImages: string[] = [];
    for (const path in modules){
        const temp = await modules[path]();
        importedImages.push(temp.default);
    }
    return importedImages;
}

export default importImages();



// const modules = import.meta.glob('../images/happy_lemon/*.png') as Record<string, () => Promise<{ default:string }>>;
// // console.log("printing modules");
// // console.log(modules);
// let importedImages: string[] = [];
// for (const path in modules){
//     // modules[path]().then((module) => {
//     //     console.log(typeof module);
//     //     console.log(module);
//     //     console.log(typeof module.default);
//     //     console.log(module.default);
//     //     importedImages.push(module.default);
//     // })
//     const temp = await modules[path]();
//     importedImages.push(temp.default);
// }
// // console.log("imported images in happy-lemon.ts");
// // console.log(importedImages);
// export {importedImages as default};