document.addEventListener("DOMContentLoaded", function () {
    // Select and handle 'Order Now' and 'Reserve a Table' buttons
    const actionButtons = document.querySelectorAll(".order-now, .reserve");
    actionButtons.forEach(button => {
        button.addEventListener("click", () => {
            window.location.href = "index.html";  // Redirect to home
        });
    });

    // Handle 'Get a Franchise' button
    const franchiseBtn = document.querySelector(".franchise-button");
    if (franchiseBtn) {
        franchiseBtn.addEventListener("click", () => {
            window.location.href = "index.html";  // Or a dedicated franchise page
        });
    }

    // Handle 'Order Online' button
    const orderOnlineBtn = document.querySelector(".order-button");
    if (orderOnlineBtn) {
        orderOnlineBtn.addEventListener("click", () => {
            window.location.href = "index.html";  // Or an order page
        });
    }
});
