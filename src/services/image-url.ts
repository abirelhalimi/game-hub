const getCroppedImgUrl = (url: string) => {
    const imagePlaceholderUrl = 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg'
    if (!url) return imagePlaceholderUrl;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImgUrl;