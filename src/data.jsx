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
    "I build electronics from the board up: the PCB, the firmware that runs on it, and the software it talks to. Right now I'm working on embedded systems for semiconductor metrology equipment at Frontier Semiconductor in Dhaka.",

  about: [
    "I studied Electrical and Electronic Engineering at Ahsanullah University of Science and Technology and graduated in 2025. Alongside my coursework, I spent those four years building things: more than twenty projects, from a 16-servo humanoid robot to a CanSat that sent back weather readings in real time.",
    "My work sits where hardware meets software. I lay out PCBs, write low-power firmware for ARM Cortex-M chips and connect embedded boards to ROS for robotics. The problems I enjoy most are the ones where you have to understand the whole system, not just one layer of it.",
    "I also know the practical side of getting a product made. I've sourced parts from Dhaka's electronics markets (Jonson Road, Nawabpur, Patuatoli, Wari) and from suppliers like DigiKey, JLCPCB, Alibaba and AliExpress. I've negotiated prices with Chinese vendors and put together R&D budgets for product development.",
  ],

  quickFacts: [
    { label: "Currently", value: "Embedded Systems Engineer, Frontier Semiconductor" },
    { label: "Education", value: "B.Sc. in EEE, AUST (2025)" },
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
        "Develop embedded hardware and firmware for the company's semiconductor metrology equipment.",
        "Contribute to product R&D, with a focus on keeping the instruments precise and reliable.",
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
      date: "2021 – Present",
      points: [
        "Help run the club's technical projects and coordinate the people working on them.",
        "Teach junior members embedded systems, hardware prototyping and robotics.",
      ],
    },
    {
      title: "Founding Member",
      company: "AUST Satellite Lab",
      date: "2021 – Present",
      points: [
        "One of the people who started the lab. I work on embedded systems design and testing for its satellite research.",
      ],
    },
    {
      title: "Software & Navigation Team",
      company: "AUST Model Rocketry",
      date: "2021 – Present",
      points: [
        "Work on navigation software, sensor integration and testing for the team's model rockets.",
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
      category: "Microcontrollers & boards",
      items: ["STM32", "ESP32", "ESP32-C3", "ESP8266", "Arduino Uno / Nano / Mega", "Raspberry Pi 4B", "Raspberry Pi Pico", "HT5023"],
    },
    {
      category: "Languages & software",
      items: ["C++", "Python", "Verilog", "MATLAB / Simulink", "ROS / micro-ROS", "OpenCV", "MediaPipe", "NumPy", "TensorFlow", "YOLO", "DeepSORT", "Git"],
    },
    {
      category: "PCB, circuit & mechanical design",
      items: ["Altium Designer", "EasyEDA", "Cadence Virtuoso", "Proteus", "Quartus Prime", "OrCAD PSpice", "SolidWorks", "AutoCAD"],
    },
    {
      category: "Protocols",
      items: ["UART", "SPI", "I²C", "USB (CDC)", "RS485", "Bluetooth", "Wi-Fi", "LoRa", "GSM/GPRS", "GPS (NMEA)", "Ethernet", "MQTT", "HTTP/HTTPS", "TCP/IP", "UDP"],
    },
    {
      category: "IDEs & tools",
      items: ["STM32CubeIDE", "Keil", "PlatformIO", "VS Code", "Arduino IDE", "Thonny", "Android Studio", "MIT App Inventor"],
    },
  ],

  hardware: [
    { name: "Sensors", items: ["DHT11", "BMP180/280", "MPU6050", "ADXL335/345", "BNO055", "GP2Y0A21YK0F", "GP2Y1010AU0F", "HC-SR04", "HX711", "MAX30100", "PIR", "flow, soil, gas, flame & color sensors"] },
    { name: "Positioning", items: ["NEO-6M / NEO-7M GPS", "EC11 rotary encoder"] },
    { name: "Wireless & comms", items: ["SX1278 LoRa", "NRF24L01+", "HC-05/06", "SIM800L / 900A / 808 / A7670C", "TSOP1738 IR", "433 MHz ASK", "MNL80A PLC"] },
    { name: "Programmers", items: ["FT232RL FTDI", "ST-Link V2", "USBasp"] },
    { name: "Motors & drivers", items: ["Stepper, servo & BLDC motors", "30A ESC", "TB6600", "L298N", "L293D", "TB6612FNG", "BTS7960", "MD10C", "PCA9685"] },
    { name: "Power", items: ["DALY BMS", "LM2596 / Mini-360 buck", "MT3608 boost", "LDOs", "PZEM-004T", "voltage & current sensors"] },
    { name: "Displays & input", items: ["SSD1306 OLED", "SPI TFT", "16×2 LCD", "TM1637", "MAX7219", "keypad", "joystick"] },
    { name: "Other", items: ["DS3231 RTC", "microSD", "MFRC522 RFID", "ESP32-CAM", "Pixhawk PX4", "FlySky radio"] },
  ],

  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Ahsanullah University of Science and Technology",
      date: "2021 – 2025",
      details: "Coursework in circuit design, power systems, control systems, microcontrollers, VLSI and digital signal processing.",
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

  honors: [
    { title: "Invited to Cozmoclench, Techfest IIT Bombay", date: "2022" },
    { title: "2nd place, Rajshahi Division, Srijonshil Medha Onneshon", date: "2016" },
  ],
};
