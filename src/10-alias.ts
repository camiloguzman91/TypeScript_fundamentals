(()=>{
    type UserID =  string | number | boolean;
    let userId: UserID;

    // Literal types
    type Sizes =  "S" | "M" | "A" | "XL";
    let shirtSize: Sizes;
    shirtSize = "S";
    shirtSize = "M";
    shirtSize = "XL";
    //shirtSize = "s";

    function greeting(userId: UserID, size: Sizes){
        if (typeof userId === 'string') {
          console.log(`string ${userId.toLowerCase()}`);
        }
    };
    greeting("Camilo","L");
    greeting("Guzmán","XL");
})();
