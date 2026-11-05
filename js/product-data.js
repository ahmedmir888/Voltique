const productsData = [
  {
    id: 1,
    name: "Samsung Galaxy S26 Ultra",
    category: "Smartphone",
    price: 1099,
    rating: 5,
    img: "../imgs/Samsung S26 Ultra.jfif",
    description:
      "Display: 6.9-inch Dynamic AMOLED 2X,1–120Hz adaptive refresh rate, Processor: Snapdragon 8 Elite Gen 5 for Galaxy, RAM: 12GB, Storage: 256GB, Rear Camera: Advanced multi-camera system, Front Camera: 12MP, Battery: 5000mAh, Features: S Pen support, IP68 water and dust resistance",
  },
  {
    id: 2,
    name: "Apple iPhone 17 Pro Max",
    category: "Smartphone",
    price: 1199,
    rating: 5,
    img: "../imgs/Apple iPhone 17 Pro Max.jfif",
    description:
      "Display: 6.9-inch Super Retina XDR OLED, 120Hz ProMotion, Processor: Apple A19 Pro, Storage: Multiple storage options, Rear Camera: Triple 48MP camera system, Front Camera: 18MP, Video: 4K Dolby Vision recording, Charging: MagSafe and Qi2 wireless charging, Protection: IP68 water and dust resistance",
  },
  {
    id: 3,
    name: "Google Pixel 10 Pro",
    category: "Smartphone",
    price: 1000,
    rating: 5,
    img: "../imgs/Google Pixel 10 Pro.jfif",
    description:
      "Display: 6.3-inch LTPO OLED, Processor: Google Tensor G5, RAM: 16GB, Rear Camera: Advanced triple-camera system, Battery: 4870mAh, Charging: Qi2 wireless charging, Operating System: Android with Google AI features, Protection: IP68 water and dust resistance",
  },
  {
    id: 4,
    name: "Xiaomi 15 Ultra",
    category: "Smartphone",
    price: 1000,
    rating: 5,
    img: "../imgs/Xiaomi 15 Ultra.jfif",
    description:
      "Display: 6.73-inch WQHD+ LTPO AMOLED, Processor: Snapdragon 8 Elite, RAM: 16GB, Storage: 512GB, Camera: Leica-engineered multi-camera system, Battery: 5410mAh, Charging: 90W wired and 80W wireless charging, Protection: IP68 water and dust resistance",
  },
  {
    id: 5,
    name: "Apple MacBook Air M4",
    category: "Laptop",
    price: 1000,
    rating: 5,
    img: "../imgs/Apple MacBook Air M4.jfif",
    description:
      "Processor: Apple M4 chip with up to 10-core CPU and GPU depending on configuration, Display: 13.6-inch Liquid Retina, RAM: 16GB Unified Memory, Storage: 256GB SSD, Camera: 12MP Center Stage, Connectivity: Wi-Fi 6E, Ports: Thunderbolt and MagSafe, Battery Life: Up to 18 hours",
  },
  {
    id: 6,
    name: "ASUS TUF Gaming A15",
    category: "Laptop",
    price: 1200,
    rating: 5,
    img: "../imgs/ASUS TUF Gaming A15.jfif",
    description:
    "Display: 15.6-inch Full HD high-refresh-rate display, Processor: AMD Ryzen 7, Graphics: NVIDIA GeForce RTX GPU depending on configuration, RAM: DDR5 memory, Storage: NVMe SSD, Cooling: Dual-fan cooling system, Connectivity: Wi-Fi 6, Ports: Multiple USB and HDMI ports, Operating System: Windows 11. Specifications may vary by model",
  },
  {
    id: 7,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 1400,
    rating: 5,
    img: "../imgs/Dell XPS 13.jfif",
    description:
    "Display: 13.4-inch high-resolution display, Processor: Intel Core Ultra depending on generation, Graphics: Integrated Intel graphics, RAM: Typically 16GB, Storage: Typically 512GB SSD, Connectivity: Thunderbolt ports and Wi-Fi, Operating System: Windows 11, Design: Premium lightweight ultrabook. Specifications may vary by model",
  },
  {
    id: 8,
    name: "Lenovo IdeaPad Slim 5",
    category: "Laptop",
    price: 800,
    rating: 5,
    img: "../imgs/Lenovo IdeaPad Slim 5.jfif",
    description:
    "Display: 14-inch or 16-inch IPS or OLED depending on configuration, Processor: Intel Core or AMD Ryzen, RAM: Typically 16GB, Storage: Typically 512GB SSD, Graphics: Integrated graphics, Connectivity: Wi-Fi and Bluetooth, Ports: USB and HDMI, Operating System: Windows 11. Specifications may vary by model",
  },
  {
    id: 9,
    name: "Sony WH-1000XM6",
    category: "Audio",
    price: 450,
    rating: 5,
    img: "../imgs/Sony WH-1000XM6.jfif",
    description:
      "Type: Over-ear wireless headphones, Drivers: 30mm, Noise Cancellation: Advanced Active Noise Cancellation, Audio: High-quality wireless audio codecs, Connectivity: Bluetooth 5.3, Features: Multipoint connection and touch controls, Battery Life: Up to 30 hours with ANC and 40 hours without ANC, Connection: 3.5mm audio jack",
  },
  {
    id: 10,
    name: "Samsung Galaxy Buds3 Pro",
    category: "Audio",
    price: 120,
    rating: 5,
    img: "../imgs/Samsung Galaxy Buds3 Pro.jfif",
    description:
      "Audio: Two-way speaker system, Noise Cancellation: Active Noise Cancellation with adaptive noise control, Features: 360 Audio, Connectivity: Bluetooth 5.4, Microphones: Six microphones, Water Resistance: IP57, Charging: USB-C and wireless charging",
  },
  {
    id: 11,
    name: "Sony Bravia 7",
    category: "Television",
    price: 2000,
    rating: 5,
    img: "../imgs/Sony Bravia 7.jfif",
    description:
      "Display: 55-inch Mini LED, Resolution: 4K Ultra HD, Picture Processor: Sony XR Processor, Backlight Technology: XR Backlight Master Drive, HDR: Dolby Vision, HDR10 and HLG, Operating System: Google TV, Audio: Acoustic Multi-Audio, Gaming: 4K at 120Hz, VRR and ALLM support.",
  },
  {
    id: 12,
    name: "Samsung S85H",
    category: "Television",
    price: 2100,
    rating: 5,
    img: "../imgs/Samsung S85H.jfif",
    description:
      "Display: OLED 4K Ultra HD, Picture Processing: Samsung advanced picture processing technology, HDR: HDR support, Operating System: Tizen Smart TV, Audio: Built-in multichannel speaker system, Gaming: Samsung Gaming Hub and gaming features, Connectivity: HDMI and USB ports, Features: Smart TV applications and streaming services",
  },
  {
    id: 13,
    name: "Apple Watch Series 11",
    category: "Smartwatch",
    price: 400,
    rating: 5,
    img: "../imgs/Apple Watch Series 11.jfif",
    description:
      "Display: LTPO OLED, Sizes: 42mm and 46mm, Processor: Apple S10, Sensors: Advanced health and fitness sensors, Connectivity: GPS with optional cellular connectivity, Water Resistance: 50 meters, Operating System: watchOS, Battery Life: Up to 24 hours",
  },
  {
    id: 14,
    name: "Samsung Galaxy Watch 8",
    category: "Smartwatch",
    price: 350,
    rating: 5,
    img: "../imgs/Samsung Galaxy Watch 8.jfif",
    description:
      "Display: Super AMOLED, Sizes: 40mm and 44mm, Processor: Exynos W1000, RAM: 2GB, Storage: 32GB, Operating System: Wear OS, Sensors: Health and fitness tracking sensors, Connectivity: GPS and Bluetooth, Protection: 5ATM and IP68.",
  },
  {
    id: 15,
    name: "Logitech MX Master 3S",
    category: "Accessories",
    price: 100,
    rating: 5,
    img: "../imgs/Logitech MX Master 3S.jfif",
    description:
      "Type: Wireless ergonomic mouse, Sensor: Darkfield high-precision sensor, DPI: Up to 8000 DPI, Scroll Wheel: MagSpeed electromagnetic scrolling, Buttons: Seven programmable buttons, Connectivity: Bluetooth and Logi Bolt USB receiver, Multi-device Support: Up to three devices, Battery Life: Up to 70 days, Charging: USB-C",
  },
  {
    id: 16,
    name: "Logitech G Pro X",
    category: "Accessories",
    price: 160,
    rating: 5,
    img: "../imgs/Logitech G Pro X Superlight 2.jfif",
    description:
      "Weight: Approximately 60g, Sensor: HERO 2 optical sensor, DPI: Up to 32,000 DPI, Switches: LIGHTFORCE hybrid switches, Connectivity: LIGHTSPEED wireless technology, Polling Rate: Up to 2000Hz, Buttons: Five programmable buttons, Battery Life: Up to 95 hours, Charging: USB-C",
  },
  {
    id: 17,
    name: "Keychron K2 Pro",
    category: "Accessories",
    price: 100,
    rating: 5,
    img: "../imgs/Keychron K2 Pro.jfif",
    description:
      "Layout: 75% compact mechanical keyboard, Keys: 84 keys, Connectivity: Bluetooth and USB-C wired connection, Compatibility: QMK and VIA support, Switches: Multiple mechanical switch options, Backlight: Available backlight variants, Battery: 4000mAh rechargeable battery, Features: Customizable keys and wireless multi-device connectivity",
  },
  {
    id: 18,
    name: "Gaming Chair",
    category: "gaming",
    price: 499,
    rating: 5,
    img: "../imgs/Gaming Chair.jfif",
    description:
      "Design: Ergonomic high-back gaming chair, Upholstery: Material varies by model, Support: Lumbar and headrest support, Armrests: Adjustable armrests, Reclining: Adjustable backrest and tilt mechanism, Height: Adjustable seat height, Base: Five-point rolling base, Features: Designed for extended gaming and computer sessions",
  },
  {
    id: 19,
    name: "Computer chair",
    category: "gaming",
    price: 599,
    rating: 5,
    img: "../imgs/Computer chair.jfif",
    description:
      "Design: Ergonomic office chair, Material: Mesh or padded upholstery depending on model, Back Support: Lumbar support, Armrests: Integrated or adjustable armrests, Height: Pneumatic seat-height adjustment, Reclining: Adjustable tilt mechanism, Base: Five-point rolling base with casters, Features: Designed for comfortable daily office use",
  },
  {
    id: 20,
    name: "PlayStation 5",
    category: "gaming",
    price: 559,
    rating: 5,
    img: "../imgs/Playstation Five.jfif",
    description:
      "Processor: AMD Zen 2 8-core CPU, Graphics: AMD RDNA 2 GPU, Memory: 16GB GDDR6, Storage: High-speed SSD with capacity depending on edition, Resolution: Supports up to 4K gaming at 120Hz, Audio: Tempest 3D AudioTech, Controller: DualSense wireless controller, Connectivity: Wi-Fi, Bluetooth and HDMI",
  },
  {
    id: 21,
    name: "Hyperx Quadcast audio",
    category: "accessories",
    price: 110,
    rating: 5,
    img: "../imgs/Hyperx Quadcast audio accessories.jfif",
    description:
      "Type: USB condenser microphone, Audio Resolution: Up to 16-bit/48kHz, Polar Patterns: Stereo, Omnidirectional, Cardioid and Bidirectional, Frequency Response: 20Hz–20kHz, Features: Built-in shock mount, Tap-to-mute sensor and LED status indicator, Monitoring: 3.5mm headphone jack, Connection: USB",
  },
  {
    id: 22,
    name: "Logitech G502 X Plus",
    category: "accessories",
    price: 150,
    rating: 5,
    img: "../imgs/Logitech G502 X Plus.jfif",
    description:
      "Sensor: HERO 25K optical sensor, DPI: Up to 25,600 DPI, Connectivity: LIGHTSPEED wireless technology, Switches: LIGHTFORCE hybrid switches, Buttons: 13 programmable controls, Lighting: LIGHTSYNC RGB, Scroll Wheel: Dual-mode scrolling, Battery Life: Up to 120 hours without RGB lighting, Charging: USB-C and POWERPLAY compatibility",
  },
  {
    id: 23,
    name: "Nacon Revolution 5 Pro ",
    category: "gaming",
    price: 180,
    rating: 5,
    img: "../imgs/Nacon Revolution 5 Pro.jfif",
    description:
      "Compatibility: PlayStation 5, PlayStation 4 and Windows PC, Analog Sticks: Hall Effect technology, Triggers: Hall Effect sensors, Design: Asymmetrical analog stick layout, Features: Programmable profiles, Adjustable weights and trigger stops, Audio: 3.5mm headphone jack, Controls: Customizable buttons",
  },
  {
    id: 24,
    name: "DualShock 4",
    category: "gaming",
    price: 55,
    rating: 5,
    img: "../imgs/DualShock 4 Wireless Controller.jfif",
    description:
      "Compatibility: PlayStation 4 and compatible devices, Connectivity: Bluetooth wireless and USB connection, Touchpad: Integrated touchpad, Motion Sensors: Six-axis motion sensing, Audio: Built-in mono speaker and 3.5mm headset jack, Features: Light bar, Share button and vibration feedback, Battery: Rechargeable battery with approximately 6–8 hours of use",
  },
  {
    id: 25,
    name: "DualSense Wireless",
    category: "gaming",
    price: 75,
    rating: 5,
    img: "../imgs/DualSense Wireless Controller.jfif",
    description:
      "Compatibility: PlayStation 5, PC and supported mobile devices, Connectivity: Bluetooth and USB-C, Feedback: Haptic feedback technology, Triggers: Adaptive triggers, Audio: Built-in microphone and speaker, Features: Integrated mute button, Motion sensors and Create button, Battery: Rechargeable built-in battery",
  },
];
