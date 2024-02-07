const importImages = async () => {
    const modules = import.meta.glob('../images/sinceretea/*.png') as Record<string, () => Promise<{ default:string }>>;
    let importedImages: string[] = [];
    for (const path in modules){
        const temp = await modules[path]();
        importedImages.push(temp.default);
    }
    return importedImages;
}

export default importImages();
