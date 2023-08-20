const btnApply = document.getElementById("btn-apply");
btnApply.disabled = true;

const btnMakePurchase = document.getElementById("btn-make-purchase");
btnMakePurchase.disabled = true;

let totalPrice = 0;

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

  //   const itemPrice =
  console.log(target.childNodes[9].innerText.split(" ")[0]);
}
