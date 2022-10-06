/**
 * Find group score and characters count
 *
 * Rules
 *
 * {} - 1 group 1 score
 * {{}} -  2 groups 3 score
 * {{},{}} - 3 groups 5 score
 *
 * garbage is started with < and finished with >
 * < and > are not counted
 * chars cancelled with ! and ! itself are not counted
 *
 * <abc> - 3 characters
 * <<<<> - 3 characters
 * <{!>}> - 2 characters
 * <!!> - 0 characters
 * <!!!>> = 0 characters
 */

 const OPEN_CURLY_BRACKET = '{';
 const CLOSE_CURLY_BRACKET = '}';
 
 const OPEN_ANGLE_BRACKET = '<';
 const CLOSE_ANGLE_BRACKET = '>';
 
 const EXCLAMATION_POINT = '!';
 
 const group1 = '{}'; // 1 group 1 score
 const group2 = '{{{}}}'; /// 3 groups 6 score
 const group3 = '{{},{}}'; // 3 groups 5 score
 const group4 = '{{{},{},{{}}}}'; // 6 groups 16 score
 const group5 = '{<a>,<a>,<a>,<a>}'; // 1 group 1 score
 const group6 = '{{<a>},{<a>},{<a>},{<a>}}'; // 5 groups 9 score
 const group7 = '{{<!>},{<!>},{<!>},{<a>}}'; // 5 groups 9 score
 const group8 = '<abc>'; // 3 characters
 const group9 = '<<<<>'; // 3 characters
 
 // console.log(
 //   getGroupScore(group1) === 1,
 //   getGroupScore(group2) === 6,
 //   getGroupScore(group3) === 5,
 //   getGroupScore(group4) === 16,
 //   getGroupScore(group5) === 1,
 //   getGroupScore(group6) === 9,
 //   getGroupScore(group7) === 9
 // );
 
 console.log(getGroupCharactersCount(group8));
 
 function getGroupScore(group: string) {
   const stack: string[] = [];
   let score = 0;
   let increment = 0;
 
   for (let i = 0; i < group.length; i++) {
     const char = group[i];
 
     if (char === OPEN_CURLY_BRACKET) {
       stack.push(char);
       increment++;
     } else if (char === CLOSE_CURLY_BRACKET) {
       const stackTop = stack.pop();
       if (stackTop === OPEN_CURLY_BRACKET) {
         score += increment;
         increment--;
       }
     }
   }
 
   return score;
 }
 
 function getGroupCharactersCount(group: string) {
   const stack: string[] = [];
   let count = 0;
   return count;
 }
 