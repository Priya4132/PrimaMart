window.onload = async () => {
  // let data=await getFurnitureDetails();
  let customerData = JSON.parse(localStorage.getItem("customersData"));
  console.log(customerData);
  let customerId = null;
  if (customerData != null) {
      customerId = customerData.id;
  }
  let cartPerCustomer = JSON.parse(localStorage.getItem("cartPerCustomer")) || [];//fetching wishlisted products from local storage if already present or an empty array
  console.log("cartPerCustomer=", cartPerCustomer);
  let cartForThisCustomer = cartPerCustomer.filter((ele, i) => ele.customerId == customerId)[0];
  console.log("cartForThisCustomer=", cartForThisCustomer);
  if (cartForThisCustomer == undefined || cartPerCustomer == null) {
      alert("No products in the Cart!")
  } else {
      let cartArray = cartForThisCustomer.cartArray;
      console.log("cartArray=", cartArray);
      showCartDetails(cartArray);
  }

}






// window.onload= async ()=>{
//     // let data=await getFurnit
//     // consolureDetails();
//     // console.log("clicked")
//     let cartArray=JSON.parse(localStorage.getItem("cartProducts"));
//     // console.log(cartArray)
//     showCartDetails(cartArray);
// }





//   //js code for showing product  details

//   function  showCartDetails(arr){
//     let cartArray = JSON.parse(localStorage.getItem("cartProducts")) || [];
//       let cart_cont=document.getElementById("cart_cont");
//       cart_cont.innerHTML="";
//     //   let filteredData=arr.filter((el,i)=> el.category=="furtinure");
//       arr.map((item,i)=>{
//           let card=document.createElement("div");
//           let product_name=document.createElement("h4");
//           product_name.textContent=item.product_name;
//           let price=document.createElement("h4");
//           price.textContent=`Price:${item.price}`;
//           let ratings=document.createElement("h4");
//           ratings.textContent=`Ratings:${item.ratings}`;
       
//           let product_image=document.createElement("img");
//           product_image.src=item.product_image;
//           let specificationdiv=document.createElement("div");
//           specificationdiv.append(product_name,price,ratings)
//       //remove from cart Button  
//      let removecartbtn=document.createElement("button");
//      removecartbtn.textContent="Remove From Cart"
//      card.append(product_image,specificationdiv,removecartbtn);
// cart_cont.append(card);
//      removecartbtn.addEventListener("click", function(){
//         console.log("clicked")
//         // cart_cont.remove(card);
//        let cartArray = JSON.parse(localStorage.getItem("cartProducts")) || [];
//     //     localStorage.setItem("cartProducts", JSON.stringify( cartArray)); 
//         cart_cont.remove(card);
//      cardartArray.splice(i, 1);
//         localStorage.removeItem(cartArray);
//         // location.reload(); // Refresh to reflect change
//      })
     
  
       
//       //    cartArray.splice(i, 1);
        


//       })
//   }





// window.onload= async ()=>{
//   // let data=await getFurnit
//   // consolureDetails();
//   // console.log("clicked")
//   let cartArray=JSON.parse(localStorage.getItem("cartProducts"));
//   // console.log(cartArray)
//   showCartDetails(cartArray);
// }

// // JS code for showing product details

// function showCartDetails(arr) {
//   let cartArray = JSON.parse(localStorage.getItem("cartProducts")) || [];
//   let cart_cont = document.getElementById("cart_cont");
//   cart_cont.innerHTML = "";

//   arr.map((item, i) => {
//       let card = document.createElement("div");
//       let product_name = document.createElement("h4");
//       product_name.textContent = item.product_name;

//       let price = document.createElement("h4");
//       price.textContent = `Price: ${item.price}`;

//       let ratings = document.createElement("h4");
//       ratings.textContent = `Ratings: ${item.ratings}`;

//       let quantityDiv = document.createElement("div");
//       let quantityLabel = document.createElement("span");
//       quantityLabel.textContent = "Quantity: ";

//       let decreaseBtn = document.createElement("button");
//       decreaseBtn.textContent = "-";

//       let quantity = document.createElement("span");
//       quantity.textContent = item.quantity || 1;

//       let increaseBtn = document.createElement("button");
//       increaseBtn.textContent = "+";

//       quantityDiv.append(quantityLabel, decreaseBtn, quantity, increaseBtn);

//       let product_image = document.createElement("img");
//       product_image.src = item.product_image;

//       let specificationdiv = document.createElement("div");
//       specificationdiv.append(product_name, price, ratings, quantityDiv);

//       // Remove from Cart Button
//       let removecartbtn = document.createElement("button");
//       removecartbtn.textContent = "Remove From Cart";

//       // Move to Wishlist Button
//       let wishlistbtn = document.createElement("button");
//       wishlistbtn.textContent = "Move to Wishlist";

//       card.append(product_image, specificationdiv, removecartbtn, wishlistbtn);
//       cart_cont.append(card);

//       // Decrease Quantity
//       decreaseBtn.addEventListener("click", function() {
//           if (item.quantity > 1) {
//               item.quantity--;
//               quantity.textContent = item.quantity;
//               cartArray[i] = item;
//               localStorage.setItem("cartProducts", JSON.stringify(cartArray));
//           }
//       });

//       // Increase Quantity
//       increaseBtn.addEventListener("click", function() {
//           item.quantity = (item.quantity || 1) + 1;
//           quantity.textContent = item.quantity;
//           cartArray[i] = item;
//           localStorage.setItem("cartProducts", JSON.stringify(cartArray));
//       });

//       // Remove from Cart
//       removecartbtn.addEventListener("click", function() {
//           cartArray.splice(i, 1);
//           localStorage.setItem("cartProducts", JSON.stringify(cartArray));
//           cart_cont.removeChild(card);
//       });

//       // Move to Wishlist
//       wishlistbtn.addEventListener("click", function() {
//           let wishlistArray = JSON.parse(localStorage.getItem("wishlistProducts")) || [];
//           wishlistArray.push(item);
//           localStorage.setItem("wishlistProducts", JSON.stringify(wishlistArray));
//           cartArray.splice(i, 1);
//           localStorage.setItem("cartProducts", JSON.stringify(cartArray));
//           cart_cont.removeChild(card);
//       });
//   });
// }



// new version

// window.onload = async () => {
//   let cartArray = JSON.parse(localStorage.getItem("cartProducts"));
//   showCartDetails(cartArray);
// };

// // JS code for showing product details

// function showCartDetails(arr) {
//   let cartArray = JSON.parse(localStorage.getItem("cartProducts")) || [];
//   let cart_cont = document.getElementById("cart_cont");
//   cart_cont.innerHTML = "";

//   arr.map((item, i) => {
//     let card = document.createElement("div");
//     let product_name = document.createElement("h4");
//     product_name.textContent = item.product_name;

//     let price = document.createElement("h4");
//     price.textContent = `Price: ${item.price}`;

//     let ratings = document.createElement("h4");
//     ratings.textContent = `Ratings: ${item.ratings}`;

//     let quantityDiv = document.createElement("div");
//     let quantityLabel = document.createElement("span");
//     quantityLabel.textContent = "Quantity: ";

//     let decreaseBtn = document.createElement("button");
//     decreaseBtn.textContent = "-";

//     let quantity = document.createElement("span");
//     quantity.textContent = item.quantity || 1;

//     let increaseBtn = document.createElement("button");
//     increaseBtn.textContent = "+";

//     quantityDiv.append(quantityLabel, decreaseBtn, quantity, increaseBtn);

//     let product_image = document.createElement("img");
//     product_image.src = item.product_image;

//     let specificationdiv = document.createElement("div");
//     specificationdiv.append(product_name, price, ratings, quantityDiv);

//     // Remove from Cart Button
//     let removecartbtn = document.createElement("button");
//     removecartbtn.textContent = "Remove From Cart";

//     // Move to Wishlist Button
//     let wishlistbtn = document.createElement("button");
//     wishlistbtn.textContent = "Move to Wishlist";

//     card.append(product_image, specificationdiv, removecartbtn, wishlistbtn);
//     cart_cont.append(card);

//     // Decrease Quantity
//     decreaseBtn.addEventListener("click", function () {
//       if (item.quantity > 1) {
//         item.quantity--;
//         quantity.textContent = item.quantity;
//         cartArray[i] = item;
//         localStorage.setItem("cartProducts", JSON.stringify(cartArray));
//       }
//     });

//     // Increase Quantity
//     increaseBtn.addEventListener("click", function () {
//       if (item.quantity < item.stocks) {
//         item.quantity = (item.quantity || 1) + 1;
//         quantity.textContent = item.quantity;
//         cartArray[i] = item;
//         localStorage.setItem("cartProducts", JSON.stringify(cartArray));
//       } else {
//         alert("Cannot add more than available stock.");
//       }
//     });

//     // Remove from Cart
//     removecartbtn.addEventListener("click", function () {
//       cartArray.splice(i, 1);
//       localStorage.setItem("cartProducts", JSON.stringify(cartArray));
//       cart_cont.removeChild(card);
//     });

//     // Move to Wishlist
//     wishlistbtn.addEventListener("click", function () {
//       let wishlistArray = JSON.parse(localStorage.getItem("wishlistProducts")) || [];
//       wishlistArray.push(item);
//       localStorage.setItem("wishlistProducts", JSON.stringify(wishlistArray));
//       cartArray.splice(i, 1);
//       localStorage.setItem("cartProducts", JSON.stringify(cartArray));
//       cart_cont.removeChild(card);
//     });
//   });
// }


// priya version with checkout
// window.onload = async () => {
//   let cartArray = JSON.parse(localStorage.getItem("cartProducts"));
//   showCartDetails(cartArray);
// };

// JS code for showing product details
function showCartDetails(arr) {
  let cartArray = JSON.parse(localStorage.getItem("cartProducts")) || [];
  let cart_cont = document.getElementById("cart_cont");
  cart_cont.innerHTML = "";

  let totalPrice = 0;

  arr.map((item, i) => {
    totalPrice += item.price * item.quantity; // Calculate total price

    let card = document.createElement("div");
    let product_name = document.createElement("h4");
    product_name.textContent = item.product_name;

    let price = document.createElement("h4");
    price.textContent = `Price: ${item.price}`;

    let ratings = document.createElement("h4");
    ratings.textContent = `Ratings: ${item.ratings}`;

    let quantityDiv = document.createElement("div");
    let quantityLabel = document.createElement("span");
    quantityLabel.textContent = "Quantity: ";

    let decreaseBtn = document.createElement("button");
    decreaseBtn.textContent = "-";

    let quantity = document.createElement("span");
    quantity.textContent = item.quantity || 1;

    let increaseBtn = document.createElement("button");
    increaseBtn.textContent = "+";

    quantityDiv.append(quantityLabel, decreaseBtn, quantity, increaseBtn);

    let product_image = document.createElement("img");
    product_image.src = item.product_image;

    let specificationdiv = document.createElement("div");
    specificationdiv.append(product_name, price, ratings, quantityDiv);

    // Remove from Cart Button
    let removecartbtn = document.createElement("button");
    removecartbtn.textContent = "Remove From Cart";

    let checkoutbtn=document.createElement("button");
    checkoutbtn.textContent = "Checkout";
    checkoutbtn.addEventListener("click", function(){
      checkoutFn(item);
    })

    card.append(product_image, specificationdiv, removecartbtn,checkoutbtn);
    cart_cont.append(card);
    cart_cont.appendChild(checkoutbtn);

    // Decrease Quantity
    decreaseBtn.addEventListener("click", function () {
      if (item.quantity > 1) {
        item.quantity--;
        quantity.textContent = item.quantity;
        cartArray[i] = item;
        localStorage.setItem("cartProducts", JSON.stringify(cartArray));
        showCartDetails(cartArray); // Refresh cart
      }
    });

    // Increase Quantity
    increaseBtn.addEventListener("click", function () {
      if (item.quantity < item.stocks) {
        item.quantity = (item.quantity || 1) + 1;
        quantity.textContent = item.quantity;
        cartArray[i] = item;
        localStorage.setItem("cartProducts", JSON.stringify(cartArray));
        showCartDetails(cartArray); // Refresh cart
      } else {
        alert("Cannot add more than available stock.");
      }
    });

    // Remove from Cart
    removecartbtn.addEventListener("click", function () {
      cartArray.splice(i, 1);
      localStorage.setItem("cartProducts", JSON.stringify(cartArray));
      showCartDetails(cartArray); // Refresh cart
    });
  });

  // Display total price
  let totalDiv = document.createElement("div");
  totalDiv.textContent = `Total Price: ₹${totalPrice}`;
  cart_cont.appendChild(totalDiv);

  // Checkout Button
  let checkoutBtn = document.createElement("button");
  checkoutBtn.textContent = "Checkout";
  checkoutBtn.style.marginTop = "20px";
  checkoutBtn.style.padding = "10px 20px";
  checkoutBtn.style.backgroundColor = "green";
  checkoutBtn.style.color = "white";
  checkoutBtn.style.border = "none";
  checkoutBtn.style.cursor = "pointer";

  // cart_cont.appendChild(checkoutbtn);

  // Checkout Functionality
  checkoutBtn.addEventListener("click", function () {
    if (cartArray.length === 0) {
      alert("Your cart is empty. Add items to checkout!");
    } else {
      alert(`Checkout Successful! Total Amount Paid: ₹${totalPrice}`);
      localStorage.removeItem("cartProducts"); // Clear cart
      showCartDetails([]); // Refresh cart
    }
  });
}



function checkoutFn(product){

  let customerData = JSON.parse(localStorage.getItem("customersData"));
  console.log(customerData);
  let customerId = null;
  if (customerData != null) {
      customerId = customerData.id;
      console.log("customerId=", customerId);
  }
  let orderPerCustomer = JSON.parse(localStorage.getItem("orderCustomer")) || [];// Fetching wishlisted products from local storage if already present or an empty array
  console.log("orderPerCustomer=", orderPerCustomer);
  let orderForThisCustomer = orderPerCustomer.filter((ele, i) => ele.customerId == customerId)[0];
  console.log("orderForThisCustomer=", orderForThisCustomer);
  if (orderForThisCustomer == null || orderForThisCustomer == undefined) {
      let orderArray = [];
      let orderId=Date.now();
      // console.log(orderId)
      orderArray.push(product);
      let orderForThisCustomer = {
        "orderId":orderId,
          "customerId": customerId,
          "orderArray": orderArray
      };
      orderPerCustomer.push(orderForThisCustomer);
      localStorage.setItem("orderPerCustomer", JSON.stringify(orderPerCustomer));
      alert("Product added to the order");
  } else {
      let orderArray = orderForThisCustomer.orderArray;
      console.log("orderArray=", orderArray);
      let matchedProduct = cartArray.filter((ele, i) => ele.id == product.id);
      console.log("matchedProduct=", matchedProduct);
      if (matchedProduct.length != 0) {
          alert("Product already present in the Order");
      } else {
          orderArray.push(product);
          localStorage.setItem("orderPerCustomer", JSON.stringify(orderPerCustomer));
          alert("Product added to the order");
      }
  }
  
}