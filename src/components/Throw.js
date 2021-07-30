export const randomThrow = (arr)=> {
    const randomItem = arr[Math.floor(Math.random()*arr.length)];
    return randomItem;
};

export const findCount =(allArr,item) =>{
    const targetItems =allArr.filter((arrItem)=> {
        return arrItem === item;
    });
    return targetItems.length;
}
