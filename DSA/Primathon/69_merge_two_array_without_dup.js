//JavaScript Program to Merge Two Arrays and Remove Duplicate Items.
function merge(){
    const arr1 = [1,2,3,4,5,6];
    const arr2 = [2,4,5,6,8,9,0];
    let combine = [...arr1, ...arr2];
    let Duplicate = [...new Set(combine)];
    console.log(Duplicate);
}
merge();