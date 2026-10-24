// == Data Display Produk ==
const products = [
    {
        id: 1,
        name: 'ASUS ROG Strix G15',
        category: 'Gaming Laptop',
        price: 22500000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1fbXqgz4GuG-OG8uDT9Fu-btkvyAJvkagw&s',
        specs: [
            'AMD Ryzen 9 5900HX',
            'NVIDIA RTX 3070 8GB',
            'RAM 16GB DDR4',
            'SSD 1TB NVMe',
            'Display 15.6" FHD 144Hz'
        ]
    },
    {
        id: 2,
        name: 'MacBook Pro M2',
        category: 'Productivity Laptop',
        price: 28000000,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
        specs: [
            'Apple M2 Chip',
            'RAM 16GB Unified',
            'SSD 512GB',
            'Display 13.3" Retina',
            'Battery 20 hours'
        ]
    },
    {
        id: 3,
        name: 'Lenovo ThinkPad X1',
        category: 'Business Laptop',
        price: 19500000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0HXmzF3XLZaYl9hcq4OVWm1D8c5Uy-IhsAQ&s',
        specs: [
            'Intel Core i7-12th Gen',
            'Intel Iris Xe Graphics',
            'RAM 16GB DDR5',
            'SSD 512GB NVMe',
            'Display 14" FHD IPS'
        ]
    },
    {
        id: 4,
        name: 'Dell XPS 17',
        category: 'Creator Laptop',
        price: 32000000,
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop',
        specs: [
            'Intel Core i9-12th Gen',
            'NVIDIA RTX 3060 6GB',
            'RAM 32GB DDR5',
            'SSD 1TB NVMe',
            'Display 17" 4K UHD+'
        ]
    },
    {
        id: 5,
        name: 'Acer Predator Helios 16',
        category: 'Gaming Laptop',
        price: 25000000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqchSLT-2k66QQpaXXgq6lcKGG5cud4cIkg&s',
        specs: [
            'Intel Core i7-12th Gen',
            'NVIDIA RTX 3060 6GB',
            'RAM 16GB DDR5',
            'SSD 512GB NVMe',
            'Display 16" QHD 165Hz'
        ]
    },
    {
        id: 6,
        name: 'HP Omen 16',
        category: 'Gaming Laptop',
        price: 25000000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZmiYuajaaMfNXy8DR-LYsxK5RTg8QqmEqw&s',
        specs: [
            'Intel Core i7-12th Gen',
            'NVIDIA RTX 3060 6GB',
            'RAM 16GB DDR5',
            'SSD 512GB NVMe',
            'Display 16" QHD 165Hz'
        ]
    },
    {
        id: 7,
        name: 'Lamzu Maya X',
        category: 'Accessories',
        price: 1450000,
        image: 'data:image/jpeg;base64,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76l+B6dRsLTxsh5p3l87HUfGpgSsmuaLetEvSvBcZv3JP/GsbG9PYEBEEbSNwL91PO3rHy0oiXTTRwRmWZgiLvJ/IDifAVVvSzpU+MbKAUgQ91OJ+0/M+G4fGtbtjbM2KfNM5NvVUaKo5Ko3ee/TWtfVUpSlBsdg7alwkwlhaxGhB9Vl4qw4irq6K9LI8UufDS9jPa8kLWZSeLNGbZhc+uhVjpc8KoSuyCZkYMjMrLqGUkEHwI1FB6b/APsc6X7TDo9txhlALeaSBQvlnbzrBxXTzKDbDMp/tJEAv/hlz8KqXZPWLMgC4lBKPrqQj7+OhVtPAeJrLxXTDCSak4hfDsUOvh6UVdDedIunGJmBUNkU/Rjuo8i/rMPLJ43qFw4SSdjlt3AC7sQkcSX3u25F36cdwBOlcsVt/CjVY5pTyfLCn4ghdmHky+daXam2pZwEYqkSm6xRjLGp55fpN9piW8auUZm2drIIzhsKT2NwZJSMrYl19Ulfoxrc5U/E2psNDSlZUpSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlB//Z',
        specs: [
            'Wireless Mouse',
            '8K DPI Sensor',
            'Ergonomic Design',
            'USB-C Charging',
            'Multi-device Support'
        ]
    },
    {
        id: 8,
        name: 'Keychron K8 Pro',
        category: 'Accessories',
        price: 1850000,
        image: 'data:image/jpeg;base64,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',
        specs: [
            'Mechanical Keyboard',
            'Hot-swappable Switches',
            'RGB Backlight',
            'Wireless & Wired',
            'Mac & Windows Compatible'
        ]
    },
    {
        id: 9,
        name: 'Sony WH-1000XM5',
        category: 'Accessories',
        price: 5500000,
        image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=300&fit=crop',
        specs: [
            'Noise Cancelling Headphone',
            '30 hours battery',
            'Premium Sound Quality',
            'Bluetooth 5.2',
            'Multi-point Connection'
        ]
    },
    {
        id: 10,
        name: 'Samsung T7 SSD 2TB',
        category: 'Accessories',
        price: 4200000,
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxESEhUTEhIVFhUVFhoWGBYXGRcaFRUYFRgXFxcZGBsYHSkgHBslGxUZITEiJSkrLzEuFx8zODMtOCgtLisBCgoKDg0OGxAQGzEjHSUuNS03LS0rNy0rLSswKystLTctLi0tLSstLy0tLS0rLS0wNy0rLi8vLi01LSsuLS03Lf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCCAH/xAA/EAACAQIEAwQIBAQFBAMAAAABAgADEQQSITEFE0EGIlFhBxQycXKBkaEjQrGyFTNSYiRD0eHwNIKiwRYXRP/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACgRAQEAAgAFAgUFAAAAAAAAAAABAhEDEiExcUFhEzJRkfAEIoHR8f/aAAwDAQACEQMRAD8A7jERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQETQO3PbHEYSsqUcgGUk51JvY2GxGm/2lBhvSrifzU6Le5ai39xLkSJZR16JzKl6VW/NhF94qkfY0z+smp6VsMPboVh5rkYfdhJHQIml0vSdw47tVX30yf2EydQ7fcMfbEgfEtRf3KIGzRKih2owD+zjMOT4c1L/QmWNHF039h0b4WB/SBmiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgcc9KZHrdPMLqBdh1KioCw+YBEsPSWcDVo061FqRZkyqUIuw05YsOoN9Omsj+kNKbY+itVitMghmG4Gfpof0mvcf4fw6nTLYbFcyrcDllqZJB3NlUHSYybkn53X16qCpXAIBNrmwkqoRlyhO8PzBtzcbqV232I6eBvSY5+9T+KW9Q21JsBNlGfD4tAjLUoBjbusN73B712AOgP1+mHEik1ZsqslEucvdzMiE924zakC19enWV7cTTwb36f6x/EU8/p/vAzGkpNr6WvmIcDa9rAE3vptMSImcAlQMwGexIAvYta17Dfa+k8+v0/H7GDjF/rgWVerWoAGnibgmw5NVxayq2oFiNGHzBHSWWA4xxEpnp49yNdDWqMwKrnIs4Ivb5frNZNdf6g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',
        specs: [
            'External SSD 2TB',
            'Transfer Speed 1050MB/s',
            'USB 3.2 Gen 2',
            'Shock Resistant',
            'Compact & Portable'
        ]
    },
    {
        id: 11,
        name: 'Anker USB-C Hub 7-in-1',
        category: 'Accessories',
        price: 850000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4cgRAM6DOPXaFocZqSU30Ecj1u92V2tezg&s',
        specs: [
            '7-in-1 USB Hub',
            'HDMI 4K Output',
            'USB 3.0 & USB-C',
            'SD Card Reader',
            'Power Delivery 100W'
        ]
    },
    {
        id: 12,
        name: 'Casing Iphone 1945 Pro Max',
        category: 'Accessories',
        price: 350000,
        image: 'https://images.unsplash.com/photo-1585399000684-d2f72660f092?w=400&h=300&fit=crop',
        specs: [
            '2 Cooling Fans',
            'Adjustable Height',
            'Fits 2-7 inch',
            'USB Powered'
        ]
    }
];

// == Cart State ==
let cart = [];

// == DOM Elements ==
const cartButton = document.getElementById('cartButton');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const popupOverlay = document.getElementById('popupOverlay');
const popupCloseBtn = document.getElementById('popupCloseBtn');

// == Initialize ==
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCart();

    // Event Listeners
    cartButton.addEventListener('click', () => {
        cartSidebar.classList.add('active');
    });

    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });

    // Prevent cart sidebar dari close saat klik elemen di dalamnya
    cartSidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close cart saat klik di luar sidebar
    document.addEventListener('click', (e) => {
        if (cartSidebar.classList.contains('active') &&
            !cartButton.contains(e.target)) {
            cartSidebar.classList.remove('active');
        }
    });

    // Checkout dengan popup terima kasih
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            popupOverlay.classList.add('active');
            cartSidebar.classList.remove('active');
            // Kosongkan keranjang setelah checkout
            cart = [];
            updateCart();
        }
    });

    // Close popup
    popupCloseBtn.addEventListener('click', () => {
        popupOverlay.classList.remove('active');
    });
});

// == Render Products ==
function renderProducts() {
    const laptopGrid = document.getElementById('laptopGrid');
    const accessoriesGrid = document.getElementById('accessoriesGrid');

    // Clear grids
    laptopGrid.innerHTML = '';
    accessoriesGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = createProductCard(product);

        if (product.category.includes('Laptop')) {
            laptopGrid.appendChild(productCard);
        } else {
            accessoriesGrid.appendChild(productCard);
        }
    });
}

// == Create Product Card ==
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <ul class="product-specs">
            ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
        </ul>
        <div class="product-footer">
            <div class="product-price">Rp ${formatPrice(product.price)}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                + Keranjang
            </button>
        </div>
    `;

    return card;
}

// == Add to Cart ==
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();

    // sidebar keranjang
    cartSidebar.classList.add('active');

    // Visual feedback
    const btn = event.target;
    btn.textContent = '✓ Ditambahkan';
    setTimeout(() => {
        btn.textContent = '+ Keranjang';
    }, 1000);
}

// == Update Cart ==
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';

    // Render cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Keranjang belanja Anda kosong</p>
            </div>
        `;
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = '0.5';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">Rp ${formatPrice(item.price)}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">Hapus</button>
                    </div>
                </div>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = '1';
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `Rp ${formatPrice(total)}`;
}

// == Update Quantity ==
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);

    if (item) {
        item.quantity += change;

        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

// == Remove from Cart ==
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// == Format Price ==
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// == Smooth Scroll ==
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// == Function pencarian ==
const searchBar = document.getElementById('searchBar');
if (searchBar) {
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const allCards = document.querySelectorAll('.product-card');

        allCards.forEach(card => {
            const productName = card.querySelector('.product-name').textContent.toLowerCase();
            const productCategory = card.querySelector('.product-category').textContent.toLowerCase();

            if (productName.includes(searchTerm) || productCategory.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}
