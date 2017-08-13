   /*jshint esversion: 6 */

(function () {
   'use strict';

   // Const
   // Use const to decalre variables that
   // won't change.
   const name  = "Albää";
   const title = "Engineer";
   const wage  = 10000;

   // Variables delcared with var can be re-declared
   // and they attach to the global window object.
   var question = "Hello?";
   //var question = "What?";
   console.log(question);

   // Variables delcared with let can't be re-declared
   // and they do NOT attach to the global window object.
   let answer = "Yes?";
   //let answer = "No.";
   console.log(answer);

   // Variables declared with let do not get hoisted
   // to the top of the function scope.
   function foo(bar) {
     if (bar) {
       console.log(baz); // ReferenceError: baz is not defined
       let baz = 'Bar is truthy!';
     }
   }

   function count() {

     for (let i = 0; i < 10; i++) {
       console.log("LET:" + i);

     }
     // Our let variable i is unedfiend in this scope

     for (var j = 0; j < 10; j++) {
       console.log("VAR:" +j);
     }
     // Our var variable j is NOT unedfiend in this scope
   }

   count();
}());
