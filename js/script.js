const btnApply = document.getElementById("btn-apply");

const btnMakePurchase = document.getElementById("btn-make-purchase");

let totalPriceValue = 0;

const totalPrice = document.getElementById("total-price");
const discountPrice = document.getElementById("discount");
const total = document.getElementById("afterDiscount");

const selectedItemsContainer = document.getElementById("selected-items-list");

// card handle function
function handleClickedCard(target) {
  const itemName = target.childNodes[7].innerText;

  const li = document.createElement("li");
  li.classList.add(
    "text-[#111]",
    "text-2xl",
    "font-medium",
    "leading-normal",
    "mb-2"
  );
  li.innerText = itemName;
  selectedItemsContainer.appendChild(li);

  const itemPrice = target.childNodes[9].innerText.split(" ")[0];

  totalPriceValue = parseFloat(totalPriceValue) + parseFloat(itemPrice);

  totalPrice.innerText = totalPriceValue.toFixed(2);

  total.innerText = totalPriceValue.toFixed(2);

  if (totalPriceValue > 0) {
    btnMakePurchase.disabled = false;
  }

  if (totalPriceValue >= 200) {
    btnApply.disabled = false;
  }
}

// apply discount function
function getDiscount() {
  const couponField = document.getElementById("coupon-field");
  const coupon = couponField.value;

  couponField.value = "";

  if (coupon === "SELL200") {
    const discount = totalPriceValue * 0.2;
    discountPrice.innerText = discount.toFixed(2);
    const afterDiscountTotal = totalPriceValue - totalPriceValue * 0.2;
    total.innerText = afterDiscountTotal.toFixed(2);
  } else if (coupon === "") {
    alert("Please provide a coupon code");
  } else {
    alert("Invalid coupon code");
  }
}

// add an event listener to 'go home' btn
document.getElementById("go-home").addEventListener("click", function () {
  selectedItemsContainer.innerHTML = "";

  totalPriceValue = 0;
  totalPrice.innerText = totalPriceValue.toFixed(2);
  discountPrice.innerText = parseFloat("0.00").toFixed(2);
  total.innerText = parseFloat("0.00").toFixed(2);

  btnMakePurchase.disabled = true;

  btnApply.disabled = true;
});
