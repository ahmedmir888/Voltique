const productsData = [
  {
    id: 1,
    name: "Samsung Galaxy S26 Ultra",
    category: "Smartphone",
    price: 1099,
    rating: 5,
    img: "../imgs/Samsung S26 Ultra.jfif",
    description:
      "Display: 6.9-inch Dynamic AMOLED 2X, QHD+ resolution (3120 x 1440), adaptive 1–120Hz refresh rate, Snapdragon 8 Elite Gen 5 for Galaxy processor, 12GB RAM, 256GB internal storage, rear cameras: 200MP main with OIS, 50MP ultra-wide, 50MP telephoto with 5x optical zoom, 10MP telephoto with 3x optical zoom, 12MP front camera, 5000mAh battery, USB-C fast charging, wireless charging, 5G, Wi-Fi 7, Bluetooth 6.0, NFC, Android with One UI, integrated S Pen, IP68 water and dust resistance, 8K video recording, fingerprint sensor, and face recognition.",
  },
  {
    id: 2,
    name: "Apple iPhone 17 Pro Max",
    category: "Smartphone",
    price: 1199,
    rating: 5,
    img: "../imgs/Apple iPhone 17 Pro Max.jfif",
    description:
      "Display: 6.9-inch Super Retina XDR OLED, 2868 x 1320 resolution at 460 ppi, ProMotion adaptive refresh rate up to 120Hz, Always-On display, Dynamic Island, A19 Pro chip, 256GB/512GB/1TB/2TB storage options, triple 48MP rear camera system with main, ultra-wide, and telephoto cameras, advanced optical-quality zoom, 18MP Center Stage front camera, 4K Dolby Vision video recording, Face ID, Apple Intelligence, 5G, Wi-Fi 7, Bluetooth 6, NFC, USB-C with DisplayPort and USB 3 support, MagSafe and Qi2 wireless charging up to 25W, IP68 water and dust resistance, iOS, and aluminum unibody construction.",
  },
  {
    id: 3,
    name: "Google Pixel 10 Pro",
    category: "Smartphone",
    price: 1000,
    rating: 5,
    img: "../imgs/Google Pixel 10 Pro.jfif",
    description:
      "Display: 6.3-inch Super Actua LTPO OLED, 1280 x 2856 resolution, 495 ppi, adaptive 1–120Hz refresh rate, up to 3300 nits peak brightness, Google Tensor G5 processor, Titan M2 security chip, 16GB RAM, 256GB/512GB/1TB storage options depending on market, 50MP main rear camera, 48MP ultra-wide camera, 48MP telephoto camera with 5x optical zoom, 42MP front camera, 4870mAh typical battery capacity, USB-C fast charging, Qi2 wireless charging, 5G, Wi-Fi, Bluetooth, NFC, Android with Pixel AI features, fingerprint reader, face unlock, and IP68 water and dust resistance.",
  },
  {
    id: 4,
    name: "Xiaomi 15 Ultra",
    category: "Smartphone",
    price: 1000,
    rating: 5,
    img: "../imgs/Xiaomi 15 Ultra.jfif",
    description:
      "Display: 6.73-inch WQHD+ LTPO AMOLED, 3200 x 1440 resolution, adaptive refresh rate up to 120Hz, Snapdragon 8 Elite processor, 16GB RAM, 512GB storage, Leica-engineered rear camera system with 50MP main camera, 50MP ultra-wide camera, 50MP floating telephoto camera, 200MP periscope telephoto camera with long-range optical zoom, 32MP front camera, 5410mAh battery for the global version, 90W wired HyperCharge, 80W wireless charging, 5G, Wi-Fi 7, Bluetooth, NFC, USB-C, stereo speakers with Dolby Atmos, ultrasonic fingerprint sensor, HyperOS based on Android, and IP68 water and dust resistance.",
  },
  {
    id: 5,
    name: "Sony WH-1000XM6",
    category: "Audio",
    price: 450,
    rating: 5,
    img: "../imgs/Sony WH-1000XM6.jfif",
    description:
      "Type: premium closed-back over-ear wireless headphones, weight approximately 254g, 30mm driver units, active noise cancellation with adaptive optimization, Ambient Sound and Quick Attention modes, DSEE Extreme audio upscaling, supported Bluetooth audio codecs: SBC, AAC, LDAC and LC3, Bluetooth 5.3, multipoint connection, frequency response up to 4Hz–40kHz in supported operating modes, integrated MEMS microphones, detachable 3.5mm audio cable, USB charging, battery life up to 30 hours with noise cancellation enabled or 40 hours with it disabled, approximately 3.5-hour charging time, touch controls, and carrying case.",
  },
  {
    id: 6,
    name: "Samsung Galaxy Buds3 Pro",
    category: "Audio",
    price: 120,
    rating: 5,
    img: "../imgs/Samsung Galaxy Buds3 Pro.jfif",
    description:
      "Type: true wireless in-ear earbuds, enhanced two-way speaker system, active noise cancellation, Adaptive Noise Control, Ambient Sound, Voice Detect and Siren Detect, 360 Audio, Super Wide Band voice support, Bluetooth 5.4, LE Audio support, Auto Switch between compatible Samsung devices, six microphones across the earbuds, touch controls, accelerometer, gyroscope, Hall sensor, proximity sensor and voice pickup unit, IP57 dust and water resistance for the earbuds, USB-C charging case, and compatibility with Android devices and Samsung Galaxy ecosystem features.",
  },
  {
    id: 7,
    name: "Apple MacBook Air M4",
    category: "Laptop",
    price: 1000,
    rating: 5,
    img: "../imgs/Apple MacBook Air M4.jfif",
    description:
      "Processor: Apple M4 chip with 10-core CPU and up to 10-core GPU depending on configuration, 16-core Neural Engine, 13.6-inch Liquid Retina IPS display with 2560 x 1664 resolution, 500 nits brightness and support for one billion colors, 16GB unified memory with higher configurations available, 256GB SSD storage with larger options available, 12MP Center Stage camera, three-microphone array, four-speaker sound system with Spatial Audio and Dolby Atmos, MagSafe 3 charging, two Thunderbolt 4 USB-C ports, 3.5mm headphone jack, Wi-Fi 6E, Bluetooth 5.3, Touch ID, macOS, fanless aluminum design, and battery life rated up to 18 hours depending on use.",
  },
  {
    id: 8,
    name: "ASUS TUF Gaming A15",
    category: "Laptop",
    price: 1200,
    rating: 5,
    img: "../imgs/ASUS TUF Gaming A15.jfif",
    description:
      "Type: gaming laptop; typical configuration includes a 15.6-inch Full HD IPS-level display with refresh rates up to 144Hz or higher depending on model, AMD Ryzen 7 processor, NVIDIA GeForce RTX discrete graphics depending on configuration, 16GB DDR5 RAM, 512GB NVMe PCIe SSD, dual-fan cooling system, military-grade durability testing on supported models, RGB-backlit keyboard, Wi-Fi 6, Bluetooth, USB-A ports, USB-C, HDMI, Ethernet and 3.5mm audio jack depending on model, Windows 11, and support for gaming, content creation and multitasking. Exact CPU, GPU, display coverage, battery and port configuration depend on the specific model number.",
  },
  {
    id: 9,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 1400,
    rating: 5,
    img: "../imgs/Dell XPS 13.jfif",
    description:
      "Type: compact premium ultrabook, 13.4-inch display with resolution and panel type depending on configuration, Intel Core Ultra processor on supported generations, integrated Intel Arc or Intel Graphics depending on CPU, 16GB RAM, 512GB NVMe SSD, thin aluminum chassis, high-resolution webcam, stereo speakers, Wi-Fi and Bluetooth, USB-C Thunderbolt ports depending on generation, Windows 11, and support for productivity, programming, travel and everyday multitasking. Display brightness, touchscreen support, processor generation, memory upgrade options, battery capacity, weight and ports vary by exact XPS 13 model.",
  },
  {
    id: 10,
    name: "Lenovo IdeaPad Slim 5",
    category: "Laptop",
    price: 800,
    rating: 5,
    img: "../imgs/Lenovo IdeaPad Slim 5.jfif",
    description:
      "Type: slim productivity laptop available in several screen sizes and configurations, typically 14-inch or 16-inch display, Full HD+ or higher resolution with IPS or OLED options depending on model, Intel Core or AMD Ryzen processor depending on generation, 16GB RAM, 512GB NVMe SSD, integrated graphics, built-in webcam with privacy features on supported models, stereo speakers, Wi-Fi, Bluetooth, USB-A, USB-C, HDMI and 3.5mm audio connectivity depending on configuration, Windows 11, and a portable chassis designed for study, office work, browsing and multitasking. Exact display, processor, memory, battery, weight and port specifications depend on the model number.",
  },
  {
    id: 11,
    name: "Sony Bravia 7",
    category: "Television",
    price: 2000,
    rating: 5,
    img: "../imgs/Sony Bravia 7.jfif",
    description:
      "Display: 55-inch QD-OLED panel, 4K Ultra HD resolution (3840 x 2160), self-emissive pixels for deep blacks and high contrast, XR Processor with AI scene recognition, XR Contrast Booster, HDR support including Dolby Vision, HDR10 and HLG, Google TV smart platform, Acoustic Surface Audio+ sound system, Dolby Atmos support, HDMI connectivity with gaming features including 4K at 120Hz, VRR and ALLM on supported inputs, Wi-Fi, Bluetooth, USB ports, Ethernet, digital TV tuner depending on region, and compatibility with PlayStation 5 gaming features. Dimensions, audio output and exact HDMI capabilities should be checked against the regional 55-inch model.",
  },
  {
    id: 12,
    name: "Samsung S85H",
    category: "Television",
    price: 2100,
    rating: 5,
    img: "../imgs/Samsung S85H.jfif",
    description:
      "Display: 55-inch QD-OLED panel, 4K Ultra HD resolution (3840 x 2160), self-emissive pixels for deep blacks and high contrast, XR Processor with AI scene recognition, XR Contrast Booster, HDR support including Dolby Vision, HDR10 and HLG, Google TV smart platform, Acoustic Surface Audio+ sound system, Dolby Atmos support, HDMI connectivity with gaming features including 4K at 120Hz, VRR and ALLM on supported inputs, Wi-Fi, Bluetooth, USB ports, Ethernet, digital TV tuner depending on region, and compatibility with PlayStation 5 gaming features. Dimensions, audio output and exact HDMI capabilities should be checked against the regional 55-inch model.",
  },
  {
    id: 13,
    name: "Apple Watch Series 11",
    category: "Smartwatch",
    price: 400,
    rating: 5,
    img: "../imgs/Apple Watch Series 11.jfif",
    description:
      "Display: Always-On Retina LTPO OLED, aluminum or titanium case depending on edition, sizes of 42mm and 46mm, S10 SiP, digital crown with haptic feedback, heart-rate sensor, ECG app, blood oxygen features where available, temperature sensing, compass, always-on altimeter, accelerometer and gyroscope, sleep tracking, sleep apnea notifications where supported, workout tracking, GPS, optional cellular connectivity, Wi-Fi, Bluetooth, Apple Pay, water resistance up to 50 meters, dust resistance rating on supported models, fast charging, and watchOS with Apple ecosystem integration. Battery life is rated for up to 24 hours under typical use, depending on configuration and usage.",
  },
  {
    id: 14,
    name: "Samsung Galaxy Watch 8",
    category: "Smartwatch",
    price: 350,
    rating: 5,
    img: "../imgs/Samsung Galaxy Watch 8.jfif",
    description:
      "Display: Super AMOLED touchscreen, available in 40mm and 44mm sizes, Exynos W1000 3nm processor, 2GB RAM, 32GB internal storage, Wear OS with Samsung One UI Watch, heart-rate monitoring, ECG and blood pressure features where regionally supported, sleep tracking, body composition analysis, workout tracking, GPS, accelerometer, gyroscope, barometer and compass sensors, Bluetooth, Wi-Fi, NFC, optional LTE depending on model, 5ATM water resistance, IP68 dust and water protection, and compatibility with Android smartphones. Battery life depends on size, connectivity and usage.",
  },
  {
    id: 15,
    name: "Logitech MX Master 3S",
    category: "Accessories",
    price: 100,
    rating: 5,
    img: "../imgs/Logitech MX Master 3S.jfif",
    description:
      "Type: wireless ergonomic productivity mouse, Darkfield high-precision sensor with sensitivity up to 8000 DPI, MagSpeed electromagnetic scrolling wheel, horizontal thumb wheel, seven customizable buttons, Bluetooth Low Energy and Logi Bolt USB receiver support, multi-device pairing for up to three devices, USB-C rechargeable battery, battery life up to 70 days depending on use, quiet-click switches, Logitech Options+ customization, compatibility with Windows, macOS, Linux, ChromeOS, iPadOS and other supported systems, and ergonomic right-handed design.",
  },
  {
    id: 16,
    name: "Logitech G Pro X",
    category: "Accessories",
    price: 160,
    rating: 5,
    img: "../imgs/Logitech G Pro X Superlight 2.jfif",
    description:
      "Type: lightweight wireless esports gaming mouse, approximate weight 60g, HERO 2 optical sensor with sensitivity up to 32000 DPI, LIGHTFORCE hybrid optical-mechanical switches, LIGHTSPEED wireless connectivity, polling rate up to 2000Hz with supported firmware and receiver configurations, five programmable buttons, onboard memory, USB-C charging, battery life up to approximately 95 hours depending on usage, PTFE feet, compatibility with Logitech G HUB, and support for Windows and macOS.",
  },
  {
    id: 17,
    name: "Keychron K2 Pro",
    category: "Accessories",
    price: 100,
    rating: 5,
    img: "../imgs/Keychron K2 Pro.jfif",
    description:
      "Type: compact 75% mechanical keyboard with 84 keys, wireless Bluetooth and wired USB-C connectivity, compatibility with macOS, Windows and Linux, mechanical switch options depending on selected version, hot-swappable switch support on compatible variants, RGB or white backlight depending on model, double-shot PBT keycaps on supported versions, QMK and VIA programmability, customizable keymaps and macros, adjustable typing angle, rechargeable battery, and compact layout with function row, arrow keys and navigation keys. Switch type, backlight, keycap material and hot-swap capability depend on the exact variant.",
  },
  {
    id: 18,
    name: "Gaming Chair",
    category: "gaming",
    price: 499,
    rating: 5,
    img: "../imgs/Gaming Chair.jfif",
    description:
      "Since is Gaming Chair a category, the Secretlab TITAN Evo represents the gold standard. It offers professional-grade ergonomics with an integrated 4-way adjustable lumbar support system, magnetic memory foam pillows, 4D armrests, and a multi-tilt mechanism designed for long gaming or work sessions.",
  },
  {
    id: 19,
    name: "Computer chair",
    category: "gaming",
    price: 599,
    rating: 5,
    img: "../imgs/Computer chair.jfif",
    description:
      "Since is Gaming Chair a category, the Secretlab TITAN Evo represents the gold standard. It offers professional-grade ergonomics with an integrated 4-way adjustable lumbar support system, magnetic memory foam pillows, 4D armrests, and a multi-tilt mechanism designed for long gaming or work sessions.",
  },
  {
    id: 20,
    name: "PlayStation 5",
    category: "gaming",
    price: 559,
    rating: 5,
    img: "../imgs/Playstation Five.jfif",
    description:
      "Sony's current-generation flagship home video game console. It delivers rapid load times with a high-speed SSD, ultra-smooth gameplay up to 4K at 120fps, ray tracing, and immersive Tempest 3D Audio. The included DualSense controller features advanced haptic feedback and adaptive triggers to simulate real-world gameplay tension.",
  },
  {
    id: 20,
    name: "Hyperx Quadcast audio",
    category: "accessories",
    price: 110,
    rating: 5,
    img: "../imgs/Hyperx Quadcast audio accessories.jfif",
    description:
      " A standalone USB condenser microphone designed for streamers, podcasters, and gamers. It features an anti-vibration shock mount, an internal pop filter, and a signature tap-to-mute sensor with an LED indicator. It provides excellent vocal reproduction with four selectable polar patterns (stereo, omnidirectional, cardioid, and bidirectional).",
  },
  {
    id: 21,
    name: "Logitech G502 X Plus",
    category: "accessories",
    price: 150,
    rating: 5,
    img: "../imgs/Logitech G502 X Plus.jfif",
    description:
      "A premium wireless RGB gaming mouse that updates Logitech's iconic G502 design. It features LIGHTFORCE hybrid optical-mechanical switches for instant actuation, a precise HERO 25K optical sensor, 13 programmable buttons, and an 8-LED customizable light strip. It charges via USB-C or a PowerPlay wireless mat.",
  },
  {
    id: 22,
    name: "Nacon Revolution 5 Pro ",
    category: "gaming",
    price: 180,
    rating: 5,
    img: "../imgs/Nacon Revolution 5 Pro.jfif",
    description:
      "A high-end pro controller compatible with PS5, PS4, and PC. It utilizes Magnetic Hall Effect technology for both its analog sticks and triggers, making them virtually immune to stick drift. It features an asymmetrical layout (similar to an Xbox controller style), which many find more ergonomic. It also includes adjustable physical weights, trigger stops, mapping software, and a durable travel case.",
  },
  {
    id: 23,
    name: "DualShock 4",
    category: "gaming",
    price: 55,
    rating: 5,
    img: "../imgs/DualShock 4 Wireless Controller.jfif",
    description:
      "The classic PlayStation 4 controller featuring a clickable capacitive Touchpad, a built-in mono speaker, a 3.5mm headset jack, and a light bar. It offers a battery life of roughly 6–8 hours of continuous play and is fully compatible with PC and smart TVs.",
  },
  {
    id: 24,
    name: "DualSense Wireless",
    category: "gaming",
    price: 75,
    rating: 5,
    img: "../imgs/DualSense Wireless Controller.jfif",
    description:
      "The official PlayStation 5 controller featuring advanced Haptic Feedback and Adaptive Triggers (allowing you to feel dynamic resistance on L2 and R2 based on in-game actions like pulling a bowstring or slamming car brakes). It includes a built-in microphone, a mute button, and offers native Bluetooth compatibility with PC and mobile devices.",
  },
];
