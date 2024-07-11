function anagram(s1, s2){
    const doSort = (s) => s.toLowerCase().split('').sort().join('').trim();
    let s1Sorted = doSort(s1);
    let s2Sorted = doSort(s2);

    // console.log(s1Sorted);
    // console.log(s2Sorted);
    let bool = s1Sorted === s2Sorted
    console.log(bool);
    return bool
}

anagram("Astronomer", "Moon starer")
anagram("School master", "The classroom")
anagram("The Morse Code", "Here come dots")