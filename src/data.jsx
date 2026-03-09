import React from 'react';
import { Cpu, Code, Terminal, Radio, Wrench, Settings, BookOpen } from 'lucide-react';

export const DATA = {
  name: "Miraz Hossain",
  title: "Embedded Systems & Robotics Engineer | EEE Graduate",
  email: "mirajj369@gmail.com",
  phone: "+8801744-132580",
  location: "Dhaka, Bangladesh",
  socials: {
    github: "https://github.com/Mirajhossain364",
    linkedin: "https://www.linkedin.com/in/miraz-hossain-eee/",
    youtube: "https://www.youtube.com/@mirajhossain3783",
  },
  about: "Detail-oriented Embedded Systems Engineer and EEE Graduate from Ahsanullah University of Science & Technology, specialized in architecting complex hardware-software ecosystems. I bring extensive experience in multi-layer PCB design, low-power Cortex-M firmware development, and the integration of AI-driven control systems with real-time robotics. My career is defined by building robust, end-to-end industrial automation and IoT solutions that bridge the gap between physical hardware and intelligent software layers.",
  
  // -- COMPREHENSIVE SKILLS --
  skills: [
    {
      category: "Single Board Computers & Microcontrollers",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      items: ["Raspberry Pi 4B", "Arduino Uno/Nano/Mega", "ESP32", "ESP8266", "ESP32C3", "STM32", "Raspberry Pi Pico", "HT5023"]
    },
    {
      category: "Software & Languages",
      icon: <Code className="w-5 h-5 text-secondary" />,
      items: ["C++", "Python", "Verilog", "Git", "Matlab", "Simulink", "OpenCV", "Mediapipe", "Numpy", "Tensorflow", "YOLO model", "DeepSORT", "ROS", "Micro-ROS"]
    },
    {
      category: "Electrical Design & CAD",
      icon: <Terminal className="w-5 h-5 text-accent" />,
      items: ["Altium Designer", "EasyEDA", "Cadence Virtuoso", "Proteus", "Quartus Prime", "Orcad Pspice", "SolidWorks", "AutoCAD"]
    },
    {
      category: "Protocols & Connectivity",
      icon: <Radio className="w-5 h-5 text-primary" />,
      items: ["UART", "SPI", "I²C", "USB (CDC)", "Bluetooth", "Wi-Fi", "Ethernet", "GSM/GPRS", "GPS (NMEA)", "RS485", "LoRa", "MQTT", "HTTP/HTTPS", "TCP/IP", "UDP"]
    },
    {
      category: "Hardware & Tools",
      icon: <Wrench className="w-5 h-5 text-secondary" />,
      subCategories: [
        {
          name: "Environmental & motion sensors",
          items: ["DHT11", "BMP180/280", "MPU6050", "ADXL335/345", "GY BNO055", "GP2Y0A21YK0F", "GP2Y1010AU0F", "HC-SR04", "LDR/Flame/Touch/Gas/Vibration/Color Sensors"]
        },
        {
          name: "Positioning & Navigation",
          items: ["NEO-6M GPS", "NEO-7M GPS", "EC11 Rotary Encoder"]
        },
        {
          name: "Wireless & Communication",
          items: ["SX1278 LoRa", "NRF24L01+", "HC-05/06", "SIM800L/900A/808/A7670C", "TSOP1738 IR", "ASK 433Mhz", "MNL80A PLC", "FT232RL FTDI", "ST link V2", "USBasp"]
        },
        {
          name: "Motor Control & Actuation",
          items: ["Stepper/Servo/BLDC Motors", "ESC 30A", "TB6600/L293D/L298N/TB6612FNG/BTS7960/MD10C Motor Drivers", "PCA9685"]
        },
        {
          name: "Power & Energy Systems",
          items: ["DALY BMS", "LM2596/mini360 Buck", "MT3608 Boost", "LDO ICs", "Voltage/Current Sensors", "PZEM-004T"]
        },
        {
          name: "Measurement & Industrial",
          items: ["Flow Sensor", "HX711 Load", "MAX30100 Pulse", "Water/Soil Moisture Sensors", "PIR Motion"]
        },
        {
          name: "Displays & HMI",
          items: ["TM1637 7-Segment", "16x2 LCD", "SSD1306 OLED", "MAX7219", "SPI TFT LCD", "Matrix Keypad", "Joystick"]
        },
        {
          name: "Storage, Vision & Advanced",
          items: ["DS3231 RTC", "MicroSD", "MFRC522 RFID", "ESP32-CAM", "Pixhawk PX4 Flight Controller", "FlySky Remote"]
        }
      ]
    },
    {
      category: "Development Tools & IDEs",
      icon: <Settings className="w-5 h-5 text-accent" />,
      items: ["Arduino IDE", "Thonny IDE", "STM32 Cube IDE", "Keil IDE", "Visual Studio Code", "PlatformIO", "Android Studio", "MIT App Inventor"]
    }
  ],

  // -- COMPREHENSIVE EXPERIENCE --
  experience: [
    {
      title: "Embedded System Engineer – RND Intern",
      company: "Cybernetics Hi-Tech Solution (Pvt.) Ltd.",
      date: "Feb 2024 - Present",
      points: [
        "Responsible for verifying technical decisions made by team members, ensuring accurate implementation and compliance with industry standards.",
        "Contributing to the design and development of Autonomous Guided Vehicles (AGVs) for agricultural and factory applications, optimizing hardware and software performance.",
        "Involved in the study of Meter Communication protocols (DCU, AMI) and STS cryptography implementation in DLMS protocol for secure metering.",
        "Programming Cortex M0-based microcontrollers for anti-theft protection systems with low-power consumption.",
        "Calibrating PLC modules for integration and data transmission over power lines.",
        "Integrating ROS and Micro-ROS with embedded systems for real-time processing in robotics.",
        "Contributing to object tracking systems for drones, enabling camera/sensor/Raspberry Pi communication."
      ]
    },
    {
      title: "Executive Member & Assistant Head of Project Team",
      company: "AUST Innovation and Design Club (IDC)",
      date: "2021 - Present",
      points: [
        "Led technical projects, fostering innovation and effective team collaboration.",
        "Mentored junior members in embedded systems and robotics development."
      ]
    },
    {
      title: "Founding Member",
      company: "AUST Satellite Lab",
      date: "2021 - Present",
      points: [
        "Supported satellite research with a focus on embedded systems design and testing."
      ]
    },
    {
      title: "Software and Navigation Team Member",
      company: "AUST Model Rocketry",
      date: "2021 - Present",
      points: [
        "Contributed to model rocketry system design, testing, and automation."
      ]
    }
  ],

  // -- ALL UNDERGRAD PROJECTS --
  projects: [
    {
      title: "Computer Vision Gesture-Controlled Lighting PCB",
      description: "Designed a custom PCB for a hand-gesture recognition system using OpenCV and MediaPipe to facilitate touchless HMI for load control.",
      tags: ["Python", "OpenCV", "MediaPipe", "PCB Design"]
    },
    {
      title: "16-DOF Humanoid Robot & Android Interface",
      description: "A 16-Degree-of-Freedom robot using AutoCAD for 2D frame design. Developed a custom Android app for kinematic control.",
      tags: ["C++", "Android App", "AutoCAD", "Kinematics"]
    },
    {
      title: "Advanced Overcurrent Protection & GSM Diagnostics",
      description: "Intelligent power protection system featuring GSM-based fault reporting and automated alerts for electrical grid safety.",
      tags: ["C++", "Power Electronics", "GSM"]
    },
    {
      title: "Vocal Navigation & Speech-Triggered Vehicle",
      description: "Architected a voice-actuated control system integrating NLP to translate speech commands into hardware execution sequences.",
      tags: ["NLP", "Robotics", "Speech Recognition"]
    },
    {
      title: "IoT Health Monitoring & Personal Safety System",
      description: "Portable system integrating GPS tracking, environmental sensors, and real-time health telemetry via IoT protocols.",
      tags: ["IoT", "GPS", "Sensors", "Telemetry"]
    },
    {
      title: "Self-Balancing Breadboard Platform",
      description: "Real-time stabilization system using a Kalman Filter for sensor fusion and a PID Control algorithm.",
      tags: ["C++", "PID Control", "Kalman Filter"]
    },
    {
      title: "Distributed Smart Home Framework",
      description: "Multi-platform automation ecosystem using Node-RED, ESP-RainMaker, and SinricPro for low-latency integration.",
      tags: ["Node-RED", "ESP-RainMaker", "IoT"]
    },
    {
      title: "Precision Agricultural Climate Optimizer",
      description: "Multi-sensor IoT node to monitor and adjust micro-climates in farming environments via data-driven feedback loops.",
      tags: ["IoT", "Sensors", "Agriculture"]
    },
    {
      title: "Spectral Signal Analysis",
      description: "Performed advanced frequency estimation and DSP on speech signals using Burg’s Method and Levinson-Durbin recursion.",
      tags: ["DSP", "MATLAB", "Signal Processing"]
    },
    {
      title: "RFID-Based Intelligent Access & Attendance",
      description: "Secure, real-time tracking system using RFID technology for automated attendance logging and encrypted entry management.",
      tags: ["RFID", "Security", "C++"]
    },
    {
      title: "Autonomous Navigation Suite",
      description: "Developed mobile robotic platforms: Gyro-controlled vehicle, Human-following bot, Line-follower, and Obstacle-avoidance system.",
      tags: ["Robotics", "Ultrasonic", "IR Sensors", "MPU6050"]
    },
    {
      title: "Industrial Smart Color Classification System",
      description: "Automated sorting system for manufacturing lines using high-speed color sensors and logic-based actuation.",
      tags: ["C++", "Color Sensors", "Industrial Automation"]
    },
    {
      title: "NTP-Server & RTC Based Smart Digital Clock",
      description: "Network-synchronized clock using ESP8266 and MAX7219 with a custom 3D-modeled chassis.",
      tags: ["ESP8266", "NTP", "3D Printing"]
    },
    {
      title: "IoT Smart Waste Management",
      description: "'Smart Dustbin' featuring ultrasonic fill-level monitoring and air quality sensors with ThingSpeak cloud visualization.",
      tags: ["IoT", "ThingSpeak", "Sensors"]
    },
    {
      title: "CanSat Weather Monitoring System",
      description: "Designed a telemetry-based 'CanSat' for real-time atmospheric weather parameter transmission.",
      tags: ["Telemetry", "Sensors", "Data Acquisition"]
    },
    {
      title: "Digital AC Voltage & Frequency Instrumentation",
      description: "High-precision digital meter to monitor mains power quality, measuring frequency and voltage fluctuations.",
      tags: ["C++", "Instrumentation", "Power Quality"]
    },
    {
      title: "Robotic Arm IR-Control & Automation",
      description: "Multi-axis robotic arm with an IR-remote interface for manual maneuvering and programmed sequence execution.",
      tags: ["C++", "Robotics", "IR Protocol"]
    },
    {
      title: "Interactive Welcoming Robot with ID Verification",
      description: "A talking robot capable of vocal interaction and security-based entry validation via ID card scanning.",
      tags: ["Voice Interaction", "RFID/ID Scanner"]
    },
    {
      title: "Python-Based Geospatial Geocoding App",
      description: "Application for automated geocoding to extract location data and mapping coordinates from phone numbers.",
      tags: ["Python", "Geocoding", "OSINT"]
    },
    {
      title: "ESP32-Based Air Mouse (HID)",
      description: "Wearable Human Interface Device (HID) using ESP32 and IMU sensor to control PC cursor through spatial gestures.",
      tags: ["ESP32", "IMU", "HID", "Bluetooth"]
    },
    {
      title: "Machine Learning Diabetes Predictive Model",
      description: "Trained a neural network using TensorFlow for clinical data analysis and binary classification for diabetes risk.",
      tags: ["TensorFlow", "Machine Learning", "Neural Networks"]
    },
    {
      title: "45nm CMOS Full Adder Design (VLSI)",
      description: "Circuit analysis in Cadence Virtuoso optimizing Delay, Power, PDP, and EDP for a 45nm Full Adder.",
      tags: ["VLSI", "Cadence Virtuoso", "CMOS"]
    },
    {
      title: "Automated Fluid Management System",
      description: "Sensor-driven system with automated alarm triggers and pump control to prevent overflow and optimize usage.",
      tags: ["Sensors", "Automation", "Fluid Dynamics"]
    },
    {
      title: "Security-Enhanced Smart Door Lock",
      description: "Biometric or multi-feature digital lock system focusing on advanced encryption and hardware-level security.",
      tags: ["Security", "Encryption", "Biometrics"]
    }
  ],

  // -- ALL EDUCATION --
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Ahsanullah University of Science & Technology",
      date: "Nov 2021 - Nov 2025",
      details: "Focus on Circuit Design, Power Systems, Control Design, MCU, VLSI, DSP."
    },
    {
      degree: "Higher Secondary School Certificate (Science)",
      institution: "Dhaka Residential Model College",
      date: "2018 - 2020",
      details: ""
    },
    {
      degree: "Secondary School Certificate (Science)",
      institution: "Pabna Zilla School",
      date: "2018",
      details: ""
    }
  ],

  // -- LOGISTICS & HOBBIES --
  logistics: [
    "Supply Chain: Local sourcing at Jonson Road, Dholaikhal, Patuatoli, Nawabpur, Wari.",
    "Supply Chain: Global sourcing from Digikey, JLC PCB, Alibaba, AliExpress.",
    "Negotiation: Deep practical experience negotiating pricing on Chinese sourcing platforms.",
    "Finance: Experienced in compiling R&D and product development budgets."
  ],

  honors: [
    "Invited to Cozmoclench, TechFest IIT Bombay – 2022",
    "Srijonshil Medha Onneshon (2nd position in Rajshahi Division, Class 9, 2016)"
  ]
};
