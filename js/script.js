const btnApply = document.getElementById("btn-apply");
btnApply.disabled = true;

const btnMakePurchase = document.getElementById("btn-make-purchase");
btnMakePurchase.disabled = true;

let totalPriceValue = 0;

function handleClickedCard(target) {
  const itemName = target.childNodes[7].innerText;

  const selectedItemsContainer = document.getElementById("selected-items-list");

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

  const totalPrice = document.getElementById("total-price");
  totalPrice.innerText = totalPriceValue.toFixed(2);

  if (totalPriceValue > 0) {
    btnMakePurchase.disabled = false;
  }

  if (totalPriceValue >= 200) {
    btnApply.disabled = false;
  }
}

function getDiscount() {
  const coupon = getInputFieldValue("coupon-field");
  console.log(coupon);
}
