export const DATA = {
  name: "Miraz Hossain",
  role: "Embedded Systems Engineer",
  company: "Frontier Semiconductor",
  email: "mirajj369@gmail.com",
  phone: "+8801744-132580",
  location: "Dhaka, Bangladesh",
  cv: "/Miraz_Hossain_CV.pdf",
  socials: {
    github: "https://github.com/Mirajhossain364",
    linkedin: "https://www.linkedin.com/in/miraz-hossain-eee/",
    youtube: "https://www.youtube.com/@mirajhossain3783",
  },

  intro:
    "I build electronics from the board up: the PCB, the firmware that runs on it, and the software it talks to. Right now I write firmware for semiconductor metrology and wafer inspection equipment at Frontier Semiconductor in Dhaka.",

  about: [
    "I studied Electrical and Electronic Engineering at Ahsanullah University of Science and Technology and graduated in 2025. Alongside my coursework I've built a lot of things, hundreds of projects by now, from a 16-servo humanoid robot to a CanSat that sent back weather readings in real time.",
    "My work sits where hardware meets software. At Frontier I write C/C++ firmware for STM32 and Raspberry Pi Compute Module boards, build motion control for multi-axis stages and write Python tools to test the hardware. Before that I worked on smart-meter firmware and ROS-based robots. The problems I enjoy most are the ones where you have to understand the whole system, not just one layer of it.",
    "I also know the practical side of getting a product made. I've sourced parts from Dhaka's electronics markets (Jonson Road, Nawabpur, Patuatoli, Wari) and from suppliers like DigiKey, JLCPCB, Alibaba and AliExpress. I've negotiated prices with Chinese vendors and put together R&D budgets for product development.",
  ],

  story: {
    title: "My story",
    description: "A short animated film about my journey so far: growing up in Bangladesh, school in Pabna, college in Dhaka and studying engineering at AUST.",
    video: "/story.mp4",
    poster: "/story-poster.jpg",
    credit: "Made with Steve AI",
    // Skip the blank first frame and the tool's logo outro (from 3:54)
    startAt: 0.1,
    endAt: 234,
    chapters: [
      { start: 0, title: "Childhood" },
      { start: 35, title: "School in Pabna" },
      { start: 60, title: "College in Dhaka" },
      { start: 120, title: "University" },
      { start: 155, title: "Graduation" },
      { start: 185, title: "Becoming an engineer" },
    ],
  },

  quickFacts: [
    { label: "Currently", value: "Embedded Systems Engineer, Frontier Semiconductor" },
    { label: "Focus", value: "Firmware, motion control, PCB design" },
    { label: "Research", value: "Co-author, Elsevier Q1 journal paper (2026)" },
    { label: "Based in", value: "Dhaka, Bangladesh" },
  ],

  workExperience: [
    {
      title: "Embedded Systems Engineer",
      company: "Frontier Semiconductor",
      link: "https://frontiersemi.com/center/home.php",
      date: "May 2026 – Present",
      current: true,
      points: [
        "Write production C/C++ firmware for semiconductor metrology and wafer inspection equipment, on STM32 and Raspberry Pi Compute Module platforms.",
        "Build closed-loop stepper and servo motion control for multi-axis stages, with hardware fault handling and machine state saved to Flash.",
        "Design digital filters that smooth optical sensor data for high-precision wafer measurement.",
        "Write Python desktop apps for diagnostics, production and automated hardware verification.",
        "Connect industrial machine vision cameras to OpenCV image processing for automatic wafer alignment, and look after the team's Git workflow for firmware.",
      ],
    },
    {
      title: "Embedded Systems Engineer, R&D Intern",
      company: "Cybernetics Hi-Tech Solution (Pvt.) Ltd.",
      link: "https://cyberneticsbd.com/",
      date: "Feb 2026 – Apr 2026",
      points: [
        "Reviewed technical decisions made by the team and checked that implementations met industry standards.",
        "Helped design and build autonomous guided vehicles (AGVs) for farms and factories, working on both the hardware and the software.",
        "Studied smart-meter communication (DCU, AMI) and how STS cryptography is used in the DLMS protocol. Experimented with 20-digit meter token systems.",
        "Programmed Cortex-M0 microcontrollers for a low-power anti-theft system.",
        "Calibrated PLC modules that send data over power lines.",
        "Connected embedded boards to ROS and micro-ROS for real-time robot control.",
        "Worked on an object-tracking system for drones that links a camera, sensors and a Raspberry Pi.",
      ],
    },
  ],

  leadership: [
    {
      title: "Executive Member & Assistant Head of Project Team",
      company: "AUST Innovation and Design Club",
      date: "2021 – 2024",
      points: [
        "Helped run the club's technical projects and coordinated the people working on them.",
        "Taught junior members embedded systems, hardware prototyping and robotics.",
      ],
    },
    {
      title: "Founding Member",
      company: "AUST Satellite Lab",
      date: "2021 – 2024",
      points: [
        "One of the people who started the lab. I worked on embedded systems design and testing for its satellite research.",
      ],
    },
    {
      title: "Software & Navigation Team",
      company: "AUST Model Rocketry",
      date: "2021 – 2024",
      points: [
        "Worked on navigation software, sensor integration and testing for the team's model rockets.",
      ],
    },
  ],

  publications: [
    {
      title: "Hydrogen economy pathways for net-zero transitions: System integration, scalability barriers, and strategic deployment",
      journal: "Energy Conversion and Management: X",
      publisher: "Elsevier · Q1",
      volume: "Vol. 31, Article 102165",
      date: "July 2026",
      authors: "R. Yeassin, T. S. Saiket, F. H. Fahad, A. Mia, M. Tarekuzzaman, M. E. Hoque, M. M. R. Adnan, Miraz Hossain, S. Chakraborty, M. A. Sufian, M. U. Koraishe, M. Hasan",
      summary: "A review of how hydrogen can fit into net-zero energy systems. It covers integration with the grid and storage, cost and feasibility, and the barriers to scaling up green and low-carbon hydrogen for industry.",
      doi: "https://doi.org/10.1016/j.ecmx.2026.102165",
      scienceDirect: "https://www.sciencedirect.com/science/article/pii/S2590174526006483",
    },
  ],

  thesis: {
    title: "AI Adaptive PID Controller",
    role: "Undergraduate thesis",
    description: "A PID controller for a multi-axis robotic arm that tunes itself with adaptive AI algorithms, so the arm tracks its trajectory more precisely.",
    tags: ["Adaptive control", "PID", "Robotics"],
  },

  projectCategories: ["Robotics", "IoT", "Power & Instrumentation", "Signals & ML", "Hardware & VLSI"],

  projects: [
    {
      title: "Gesture-Controlled Lighting",
      description: "A custom PCB that switches lights and other loads with hand gestures. OpenCV and MediaPipe handle the hand tracking, so you never touch a switch.",
      tags: ["Python", "OpenCV", "MediaPipe", "PCB"],
      category: "Hardware & VLSI",
      featured: true,
    },
    {
      title: "16-DOF Humanoid Robot",
      description: "A humanoid robot with 16 degrees of freedom. I drew the frame in AutoCAD, had it laser-cut, and wrote an Android app to control its movement in real time.",
      tags: ["C++", "Android", "AutoCAD", "Kinematics"],
      category: "Robotics",
      featured: true,
    },
    {
      title: "Overcurrent Protection with GSM Alerts",
      description: "Cuts the supply when it detects overcurrent and sends a fault report over GSM, so you know what happened without being on site.",
      tags: ["C++", "Power Electronics", "GSM"],
      category: "Power & Instrumentation",
      featured: true,
    },
    {
      title: "Voice-Controlled Vehicle",
      description: "A small robot car that takes spoken commands. Speech recognition turns each command into an action for the motors.",
      tags: ["Speech Recognition", "NLP", "Robotics"],
      category: "Robotics",
    },
    {
      title: "Portable Health & Safety Monitor",
      description: "A portable device for people working in hazardous environments. It tracks location by GPS, reads environmental sensors and streams health data over IoT.",
      tags: ["IoT", "GPS", "Sensors"],
      category: "IoT",
      featured: true,
    },
    {
      title: "Self-Balancing Robot",
      description: "A breadboard-based chassis that keeps itself upright. A Kalman filter fuses the IMU readings and a PID loop corrects the tilt.",
      tags: ["C++", "PID", "Kalman Filter"],
      category: "Robotics",
      featured: true,
    },
    {
      title: "Smart Home Automation",
      description: "Home appliances you can control from Node-RED, ESP RainMaker or SinricPro, with very little delay.",
      tags: ["Node-RED", "ESP RainMaker", "IoT"],
      category: "IoT",
    },
    {
      title: "Greenhouse Climate Controller",
      description: "A multi-sensor IoT node that monitors the micro-climate where crops grow and adjusts it based on the readings.",
      tags: ["IoT", "Sensors", "Agriculture"],
      category: "IoT",
    },
    {
      title: "Speech Signal Spectral Analysis",
      description: "Estimated the frequency content of speech signals in MATLAB with parametric methods: Burg, Yule-Walker and Levinson-Durbin recursion.",
      tags: ["DSP", "MATLAB"],
      category: "Signals & ML",
      featured: true,
    },
    {
      title: "RFID Attendance & Access",
      description: "Logs attendance and controls entry with RFID cards, in real time and with secure entry records.",
      tags: ["RFID", "C++", "Security"],
      category: "IoT",
    },
    {
      title: "Autonomous Navigation Robots",
      description: "Four small mobile robots: one gyro-controlled, one that follows a person, one that follows a line and one that avoids obstacles. They use ultrasonic and IR sensors.",
      tags: ["Robotics", "Ultrasonic", "IR", "MPU6050"],
      category: "Robotics",
    },
    {
      title: "Color Sorting System",
      description: "Sorts items on a production line by color using a color sensor and simple actuation logic, as a form of quality control.",
      tags: ["C++", "Color Sensor", "Automation"],
      category: "Robotics",
    },
    {
      title: "NTP-Synced Digital Clock",
      description: "An ESP8266 clock that syncs its time from NTP servers, with an RTC as backup. It shows the time on a MAX7219 display inside a case I modeled and 3D printed.",
      tags: ["ESP8266", "NTP", "3D Printing"],
      category: "IoT",
    },
    {
      title: "Smart Dustbin",
      description: "A bin that reports how full it is with an ultrasonic sensor and checks the air quality around it. Live charts are on ThingSpeak.",
      tags: ["IoT", "ThingSpeak", "Sensors"],
      category: "IoT",
    },
    {
      title: "CanSat Weather Station",
      description: "A satellite the size of a soda can that sends weather readings back over telemetry in real time.",
      tags: ["Telemetry", "Sensors"],
      category: "IoT",
    },
    {
      title: "AC Voltage & Frequency Meter",
      description: "A digital meter that measures mains voltage and frequency in real time, to keep an eye on power quality.",
      tags: ["C++", "Instrumentation"],
      category: "Power & Instrumentation",
    },
    {
      title: "IR-Controlled Robotic Arm",
      description: "A multi-axis robotic arm. You can drive it by hand with an IR remote or have it play back a programmed sequence.",
      tags: ["C++", "Robotics", "IR"],
      category: "Robotics",
    },
    {
      title: "Welcome Robot with ID Check",
      description: "A talking robot that greets visitors and scans their ID cards before letting them in.",
      tags: ["Voice", "ID Scanner"],
      category: "Robotics",
    },
    {
      title: "Phone Number Geocoder",
      description: "A Python tool that finds location information and map coordinates from a phone number.",
      tags: ["Python", "Geocoding"],
      category: "Signals & ML",
    },
    {
      title: "ESP32 Air Mouse",
      description: "A wearable device built with an ESP32 and an IMU. It moves your computer's cursor as you move your hand.",
      tags: ["ESP32", "IMU", "HID", "Bluetooth"],
      category: "Hardware & VLSI",
    },
    {
      title: "Diabetes Risk Prediction",
      description: "A neural network trained on clinical data with TensorFlow to classify diabetes risk.",
      tags: ["TensorFlow", "Machine Learning"],
      category: "Signals & ML",
    },
    {
      title: "45nm CMOS Full Adder",
      description: "Designed a full adder in 45nm CMOS in Cadence Virtuoso and tuned it for delay, power, PDP and EDP.",
      tags: ["VLSI", "Cadence Virtuoso", "CMOS"],
      category: "Hardware & VLSI",
    },
    {
      title: "Water Tank Controller",
      description: "Watches the water level, runs the pump automatically and sounds an alarm before the tank overflows.",
      tags: ["Sensors", "Automation"],
      category: "Power & Instrumentation",
    },
    {
      title: "Smart Door Lock",
      description: "A digital lock with several ways to unlock it, designed with hardware-level security in mind.",
      tags: ["Security", "Embedded"],
      category: "Hardware & VLSI",
    },
  ],

  skills: [
    {
      category: "Firmware & control",
      note: "What I spend most of my working day on.",
      items: ["Closed-loop stepper & servo control", "Digital filtering (moving average, EMA, Kalman)", "Sensor calibration", "Hardware fault handling", "Flash state persistence", "Machine vision with OpenCV"],
    },
    {
      category: "Microcontrollers & boards",
      note: "Chips I've written firmware for.",
      items: ["STM32 (F4, L4, H7)", "ARM Cortex-M0", "ESP32 / C3 / C6", "ESP8266", "Arduino Mega", "HT5023", "AT89C4051", "Raspberry Pi Compute Module", "Raspberry Pi 4B", "Raspberry Pi Pico"],
    },
    {
      category: "Languages",
      note: "C/C++ on the device, Python for the tools around it.",
      items: ["C/C++", "Python", "MicroPython", "Verilog", "MATLAB / Simulink"],
    },
    {
      category: "Libraries & frameworks",
      note: "For robotics, vision, machine learning and desktop tools.",
      items: ["ROS / micro-ROS", "OpenCV", "MediaPipe", "NumPy", "TensorFlow", "YOLO", "DeepSORT", "Tkinter / CustomTkinter", "PyInstaller", "Linux (lgpio)"],
    },
    {
      category: "Protocols",
      note: "From board-level buses to industrial and network protocols.",
      items: ["UART", "SPI", "I²C", "CAN", "RS-232", "RS-485", "Modbus", "DLMS", "USB (CDC)", "Bluetooth", "Wi-Fi", "LoRa", "GSM/GPRS (AT)", "GPS (NMEA)", "Ethernet", "TCP/IP", "MQTT", "HTTP/HTTPS", "WebSockets"],
    },
    {
      category: "Design & CAD",
      note: "Schematics, PCB layout, simulation and mechanical parts.",
      items: ["Altium Designer", "EasyEDA", "Cadence Virtuoso", "Proteus", "Quartus Prime", "OrCAD PSpice", "SolidWorks", "AutoCAD"],
    },
    {
      category: "Dev & debug tools",
      note: "Where the code gets written, flashed and versioned.",
      items: ["STM32CubeIDE", "Keil", "J-Link", "PlatformIO", "VS Code", "Arduino IDE", "Thonny", "Git / GitHub", "Android Studio", "MIT App Inventor"],
    },
  ],

  hardware: [
    { name: "Sensors & motion", items: ["BMP180/280", "MPU6050", "ADXL335/345", "BNO055", "GP2Y0A21YK0F", "GP2Y1010AU0F", "TCRT5000", "TTP223", "SW-420", "TCS230/TCS3200", "MQ-4", "temperature sensors"] },
    { name: "Positioning", items: ["NEO-6M / 7M GPS", "EC11 encoder"] },
    { name: "Wireless & comms", items: ["SX1278 LoRa", "NRF24L01+", "HC-05/06", "SIM808 / SIM800L / SIM900A", "A7670C", "MNL80A PLC", "433 MHz ASK", "TSOP1738"] },
    { name: "Programmers", items: ["FT232RL", "ST-Link V2", "USBasp"] },
    { name: "Motion & drives", items: ["NEMA-17", "28BYJ-48", "MG996R", "BLDC / ESC", "industrial servo & stepper drives", "TB6600", "L293D", "L298N", "TB6612FNG", "BTS7960", "Cytron MD10C", "PCA9685"] },
    { name: "Power", items: ["DALY BMS", "LM2596", "MT3608", "LDOs", "ZMPT101B", "ACS712", "PZEM-004T", "PCF8574"] },
    { name: "Measurement", items: ["YF-S201", "HX711", "MAX30100", "FC-28", "HC-SR501"] },
    { name: "Displays & HMI", items: ["TM1637", "16×2 LCD", "SSD1306", "MAX7219", "ST7789V TFT", "4×4 keypad"] },
    { name: "Storage & ID", items: ["DS3231", "microSD", "MFRC522"] },
    { name: "Vision & systems", items: ["industrial machine vision cameras", "ESP32-CAM (OV2640)", "Pixhawk PX4", "FlySky FS-i6X", "PAM8610"] },
  ],

  quote: {
    text: "The progressive development of man is vitally dependent on invention. It is the most important product of his creative brain.",
    author: "Nikola Tesla",
    source: "My Inventions (1919)",
  },

  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Ahsanullah University of Science and Technology",
      date: "2021 – 2025",
      details: "Coursework included circuit design, power systems, control system design, microcontrollers, computer architecture, DSP, VLSI, image processing and medical device design.",
    },
    {
      degree: "Higher Secondary Certificate, Science",
      institution: "Dhaka Residential Model College",
      date: "2018 – 2020",
    },
    {
      degree: "Secondary School Certificate, Science",
      institution: "Pabna Zilla School",
      date: "2018",
    },
  ],
};
