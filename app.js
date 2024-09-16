const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Lazy loading for images
document.addEventListener("DOMContentLoaded", function () {
    var lazyImages = [].slice.call(document.querySelectorAll("img"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (
            entries,
            observer
        ) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});
document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
    button.addEventListener("click", () => {
        // Add your click event logic here
        console.log(
            "Button clicked:",
            button.parentElement.querySelector("h3").textContent
        );
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const productItems = document.querySelectorAll(".product-item");

    productItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const newProductItems = document.querySelectorAll(
        ".electric-cycles-laptops-cameras .product-item"
    );

    newProductItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });

        const button = item.querySelector(".category-btn");
        button.addEventListener("click", () => {
            console.log("Button clicked:", item.querySelector("h3").textContent);
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const socialIcons = document.querySelectorAll('.social-icons a');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.style.color = '#2874f0';
        });

        icon.addEventListener('mouseleave', function () {
            this.style.color = '#fff';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const shopNowBtn = document.getElementById('shopNowBtn');

    shopNowBtn.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#e85a0d';
    });

    shopNowBtn.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '#fb641b';
    });

    shopNowBtn.addEventListener('click', function (e) {
        e.preventDefault();
        this.textContent = 'Shopping...';
        setTimeout(() => {
            this.textContent = 'Shop Now';
        }, 2000);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const checkoutForm = document.querySelector('.checkout-form');
    const paymentSection = document.querySelector('.payment-section');
    const checkoutBtn = document.getElementById('checkout-btn');

    checkoutBtn.addEventListener('click', function () {
        checkoutForm.style.display = 'none';
        paymentSection.style.display = 'block';
    });

    document.getElementById('checkout-form').addEventListener('submit', function (e) {
        e.preventDefault();
        checkoutForm.style.display = 'none';
        paymentSection.style.display = 'block';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const cart = [];
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const paymentSection = document.querySelector('.payment-section');
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const paymentDetails = document.getElementById('payment-details');
    const payBtn = document.getElementById('pay-btn');

    // ... (previous cart-related functions)

    checkoutBtn.addEventListener('click', function () {
        paymentSection.style.display = 'block';
    });

    paymentOptions.forEach(option => {
        option.addEventListener('change', function () {
            paymentDetails.innerHTML = '';
            paymentDetails.style.display = 'block';

            const form = document.createElement('form');
            form.classList.add('payment-form');

            switch (this.value) {
                case 'upi':
                    form.innerHTML = `
              <input type="text" placeholder="Enter UPI ID" required>
            `;
                    break;
                case 'card':
                    form.innerHTML = `
              <input type="text" placeholder="Card Number" required>
              <input type="text" placeholder="Name on Card" required>
              <input type="text" placeholder="Expiry Date (MM/YY)" required>
              <input type="text" placeholder="CVV" required>
            `;
                    break;
                case 'netbanking':
                    form.innerHTML = `
              <input type="text" placeholder="Bank Name" required>
              <input type="text" placeholder="Account Number" required>
              <input type="password" placeholder="Password" required>
            `;
                    break;
                case 'cod':
                    form.innerHTML = `
              <p>Cash will be collected upon delivery.</p>
            `;
                    break;
                case 'qr':
                    form.innerHTML = `
              <p>Scan the QR code to make payment:</p>
              <img src="path_to_qr_code_image.png" alt="QR Code">
            `;
                    break;
            }

            paymentDetails.appendChild(form);
        });
    });

    payBtn.addEventListener('click', function () {
        alert('Payment processed successfully!');
        // Here you would typically send the payment data to your server
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const cart = [];
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const paymentSection = document.querySelector('.payment-section');
    const payBtn = document.getElementById('pay-btn');

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
          <div class="quantity-controls">
            <button class="decrease-btn" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="increase-btn" data-index="${index}">+</button>
          </div>
        `;
            cartItems.appendChild(itemElement);
            total += item.price * item.quantity;
        });
        cartTotal.textContent = `₹${total}`;
    }

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const productItem = this.closest('.product-item');
            const name = productItem.querySelector('h3').textContent;
            const price = parseFloat(productItem.querySelector('.price').textContent.replace('₹', '').replace(',', ''));
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            updateCart();
        });
    });

    cartItems.addEventListener('click', function (e) {
        if (e.target.classList.contains('increase-btn') || e.target.classList.contains('decrease-btn')) {
            const index = e.target.dataset.index;
            if (e.target.classList.contains('increase-btn')) {
                cart[index].quantity++;
            } else if (cart[index].quantity > 1) {
                cart[index].quantity--;
            } else {
                cart.splice(index, 1);
            }
            updateCart();
        }
    });

    checkoutBtn.addEventListener('click', function () {
        paymentSection.style.display = 'block';
    });

    payBtn.addEventListener('click', function () {
        alert('Payment processed successfully!');
        cart.length = 0;
        updateCart();
        paymentSection.style.display = 'none';
    });
});