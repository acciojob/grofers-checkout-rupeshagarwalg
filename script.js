const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price cells
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  // Loop through prices and calculate total
  prices.forEach((price) => {
    total += parseFloat(price.textContent);
  });

  // Create new row
  const newRow = document.createElement("tr");

  // Create one cell that spans both columns
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // span across both columns
  totalCell.textContent = `Total Price: Rs ${total}`;

  // Append cell to row
  newRow.appendChild(totalCell);

  // Append row to table
  const table = document.querySelector("table");
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
