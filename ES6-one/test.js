
// Universities have courses with dependencies, e.g.:
// csc 100
// csc 110
// math 100
// csc 200 -> csc 100
// csc 224 -> csc 110
// csc 323 -> csc 224, csc 200, math 100
// csc 401 -> csc 323, csc 224

// given I want to take csc 401, plan out the courses I need to take, in order, to meet the requirements

// i.e.:
// plan("csc 200") -> ["csc 100"]
// plan("csc 401") -> ["csc 100", "csc 110", "csc 200", "math 100", "csc 224", "csc 323"]


function getDependencies(course) {
    // example just for testing, normally this would talk to a DB, etc.
    const courses = {
        "csc 401": ["csc 323", "csc 224"],
        "csc 323": ["csc 224", "csc 200", "math 100"],
        "csc 224": ["csc 110"],
        "csc 200": ["csc 100"],
    };

    return courses[course] || [];
} // -> [dep1, dep2, ...]


function plan(course) {
    
    var myset = new Set();
    var lists = [];
    lists = getDependencies(course);

    for (let i = 0; i < lists.length; i++) {
        myset.add(lists[i]);
    }
        if (myset.has("csc 323")) {
            let list = getDependencies("csc 323");

                for (let i = 0; i < list.length; i++) {
                 myset.add(list[i]);
                }
        }
        if (myset.has("csc 224")) {
            let list = getDependencies("csc 224");

            for (let i = 0; i < list.length; i++) {
            myset.add(list[i]);
            }
        }
        console.log(course+" Dependencies are as following");
        console.log(...myset);    

} // -> array of what courses to take in order
plan('csc 401');


