// Main University Timeline Data
const universityTimelineData = [
    {
        id: 1,
        date: "1984, July 5",
        title: "Founding of Vellore Engineering College",
        description: "VIT's journey began when Dr. G. Viswanathan established Vellore Engineering College (VEC) in Vellore, Tamil Nadu, as a self-financing institution under Anna University with 180 students and three undergraduate programs.",
        image: "assets/images/vellore/vellore_founding_1984.jpg",
        keyFigure: {
            name: "Dr. G. Viswanathan",
            role: "Founder and Chancellor",
            image: "assets/images/common/gv.jpg"
        },
        fullDescription: "VIT's journey began when Dr. G. Viswanathan, a former parliamentarian and education visionary, established Vellore Engineering College (VEC) in Vellore, Tamil Nadu, as a self-financing institution under Anna University. With a modest intake of 180 students and three undergraduate engineering programs (Civil, Mechanical, and Electronics & Communication), VEC aimed to provide quality technical education aligned with industry needs. The campus spanned 250 acres, laying the foundation for future expansions."
    },
    {
        id: 2,
        date: "1985",
        title: "First Batch of Engineering Students",
        description: "The first batch of engineering students enrolled under the leadership of founding Principal Dr. S. Narayanan, establishing the academic foundation that would shape VIT's approach to technical education.",
        image: "assets/images/vellore/vellore_academic_block.jpg",
        keyFigure: {
            name: "Dr. S. Narayanan",
            role: "Founding Principal",
            image: "assets/images/common/anand_samuel.jpg"
        },
        fullDescription: "The first batch of engineering students enrolled under the leadership of founding Principal Dr. S. Narayanan. The initial programs included Computer Science, Electronics, and Mechanical Engineering with state-of-the-art facilities for the time. The academic foundation established during this period would shape VIT's approach to technical education for decades to come."
    },
    {
        id: 3,
        date: "1988",
        title: "First Academic Block Completed",
        description: "The first academic block was completed under the supervision of Prof. V. Ramamurthy, expanding the campus infrastructure to accommodate growing student numbers.",
        image: "assets/images/vellore/vellore_academic_block.jpg",
        keyFigure: {
            name: "Prof. V. Ramamurthy",
            role: "Infrastructure Development Head",
            image: "assets/images/common/v_raju.jpg"
        },
        fullDescription: "The first academic block was completed under the supervision of Prof. V. Ramamurthy, expanding the campus infrastructure to accommodate growing student numbers and adding new laboratories equipped with the latest technology. This expansion marked the beginning of VEC's commitment to providing quality infrastructure for education."
    },
    {
        id: 4,
        date: "1989",
        title: "Library Facilities Established",
        description: "Library facilities were established with an initial collection of 10,000 volumes, subscribing to over 100 national and international journals.",
        image: "assets/images/vellore/vellore_library.jpg",
        keyFigure: {
            name: "Ms. Lakshmi Narasimhan",
            role: "First Chief Librarian",
            image: "assets/images/common/ramesh_babu.jpg"
        },
        fullDescription: "Library facilities were established with an initial collection of 10,000 volumes, subscribing to over 100 national and international journals. Ms. Lakshmi Narasimhan was appointed as the first Chief Librarian, laying the foundation for what would become one of India's most comprehensive technical libraries."
    },
    {
        id: 5,
        date: "1990, April 28",
        title: "First Graduation Ceremony",
        description: "The first batch of VEC students graduated, marking a significant milestone with 120 graduates achieving 100% placement in leading companies like TCS, Infosys, and HCL.",
        image: "assets/images/vellore/vellore_graduation_1990.jpg",
        keyFigure: {
            name: "Dr. M. Anandakrishnan",
            role: "Chief Guest, Chairman of IIT Kanpur",
            image: "assets/images/common/chancellor.jpg"
        },
        fullDescription: "The first batch of VEC students graduated, marking a significant milestone. The ceremony was held with Dr. M. Anandakrishnan, Chairman of IIT Kanpur, as the chief guest. The ceremony celebrated the achievements of 120 graduates who achieved 100% placement in leading companies like TCS, Infosys, and HCL."
    },
    {
        id: 6,
        date: "1992",
        title: "Introduction of Postgraduate Programs",
        description: "Postgraduate programs in Computer Applications (MCA) and Engineering (M.Tech) were introduced under the guidance of Prof. G. Sathyanarayanan.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Prof. G. Sathyanarayanan",
            role: "Academic Director",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "Postgraduate programs in Computer Applications (MCA) and Engineering (M.Tech) were introduced under the guidance of Prof. G. Sathyanarayanan. These programs attracted talent from across India and established VEC as a center for advanced studies in engineering and technology."
    },
    {
        id: 7,
        date: "1994",
        title: "Research Initiatives Launched",
        description: "Research initiatives were launched with the establishment of the first research laboratory focused on Materials Science led by Dr. P. Ramaswamy.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. P. Ramaswamy",
            role: "Head of Research",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "Research initiatives were launched with the establishment of the first research laboratory focused on Materials Science led by Dr. P. Ramaswamy. The institute secured its first major research grant of Rs. 1.5 crores from the Department of Science and Technology, marking the beginning of VEC's research journey."
    },
    {
        id: 8,
        date: "1996",
        title: "Campus Expansion",
        description: "Campus expansion began with the acquisition of additional 50 acres of land for new academic blocks, hostels, and sports facilities.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Mr. K. Raghunathan",
            role: "Infrastructure Development Committee Chair",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "Campus expansion began with the acquisition of additional 50 acres of land for new academic blocks, hostels, and sports facilities. Mr. K. Raghunathan led the infrastructure development committee that designed the master plan for the growing campus, envisioning a world-class educational institution."
    },
    {
        id: 9,
        date: "1999",
        title: "Preparation for University Status",
        description: "Preparation for university status application was initiated by Dr. G. Viswanathan and Prof. V. S. Sekhar, with comprehensive documentation of academic achievements.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Prof. V. S. Sekhar",
            role: "Academic Coordinator",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "Preparation for university status application was initiated by Dr. G. Viswanathan and Prof. V. S. Sekhar, with comprehensive documentation of academic achievements, infrastructure development, and future growth plans. This strategic move would soon transform VEC into a deemed university."
    },
    {
        id: 10,
        date: "2001, June 19",
        title: "University Status Granted",
        description: "VEC was conferred university status by the Ministry of Human Resource Development, becoming Vellore Institute of Technology (VIT) under the leadership of Dr. G. Viswanathan as Chancellor.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. G. Viswanathan",
            role: "Chancellor",
            image: "assets/images/common/gv.jpg"
        },
        fullDescription: "VEC was conferred university status by the Ministry of Human Resource Development (MHRD), becoming Vellore Institute of Technology (VIT) under the leadership of Dr. G. Viswanathan as Chancellor and Dr. Sekar Viswanathan as Vice-President. This milestone marked the beginning of a new era of autonomy and academic freedom."
    },
    {
        id: 11,
        date: "2002",
        title: "Introduction of Fully Flexible Credit System (FFCS)",
        description: "The Fully Flexible Credit System (FFCS) was introduced, a revolutionary academic model in Indian education pioneered by Dr. V. Raju, the then Vice-Chancellor.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. V. Raju",
            role: "Vice-Chancellor",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "The Fully Flexible Credit System (FFCS) was introduced, a revolutionary academic model in Indian education pioneered by Dr. V. Raju, the then Vice-Chancellor. This system allowed students to choose courses, faculty, and timings according to their preferences, establishing VIT as an innovator in higher education."
    },
    {
        id: 12,
        date: "2003",
        title: "First International Collaborations",
        description: "First international collaborations were established with Massachusetts Institute of Technology (MIT) and Carnegie Mellon University.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. Prema Rajagopalan",
            role: "Head of International Relations",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "First international collaborations were established with Massachusetts Institute of Technology (MIT) and Carnegie Mellon University. Dr. Prema Rajagopalan led the International Relations team that facilitated student exchange programs and joint research initiatives, beginning VIT's global outreach."
    },
    {
        id: 13,
        date: "2004",
        title: "VIT Business School Launched",
        description: "VIT Business School was launched under the guidance of Dr. R. Venkataraman with innovative MBA programs focusing on entrepreneurship and international business.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. R. Venkataraman",
            role: "Dean, VIT Business School",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "VIT Business School was launched under the guidance of Dr. R. Venkataraman with innovative MBA programs focusing on entrepreneurship and international business. The school quickly gained recognition for its industry-integrated curriculum and practice-oriented approach."
    },
    {
        id: 14,
        date: "2005",
        title: "Introduction of VITEEE",
        description: "The VIT Engineering Entrance Examination (VITEEE) was introduced, establishing new standards of transparency and fairness in the admission process with over 50,000 applicants in its first year.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Prof. S. Narayanan",
            role: "Head of Admissions Committee",
            image: "assets/images/vellore/campus.jpg"
        },
        fullDescription: "The VIT Engineering Entrance Examination (VITEEE) was introduced, orchestrated by Prof. S. Narayanan and team. The examination established new standards of transparency and fairness in the admission process, attracting over 50,000 applicants in its first year."
    },
    {
        id: 15,
        date: "2007",
        title: "Research Centers Established",
        description: "Research centers were established in emerging technologies including Nanotechnology, Biomedical Engineering, and Sustainable Energy under the leadership of Dr. Anand A. Samuel.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. Anand A. Samuel",
            role: "Research Director",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "Research centers were established in emerging technologies including Nanotechnology, Biomedical Engineering, and Sustainable Energy under the leadership of Dr. Anand A. Samuel. These centers received grants totaling Rs. 10 crores from various funding agencies, enhancing VIT's research profile."
    },
    {
        id: 16,
        date: "2008",
        title: "First Major International Conference",
        description: "The first major international conference was hosted on 'Emerging Trends in Computing' with Dr. Raj Reddy, Turing Award winner, as keynote speaker.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. Raj Reddy",
            role: "Turing Award Winner, Keynote Speaker",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "The first major international conference was hosted on 'Emerging Trends in Computing' with Dr. Raj Reddy, Turing Award winner, as keynote speaker. The conference attracted participants from 25 countries and established VIT's reputation as a hub for academic exchange and knowledge sharing."
    },
    {
        id: 17,
        date: "2009",
        title: "Planning for Chennai Campus",
        description: "Planning began for the Chennai campus led by Dr. G. Viswanathan and Dr. Sandhya Pentareddy, Executive Director, extending VIT's educational model to Tamil Nadu's capital city.",
        image: "assets/images/chennai/campus.jpg",
        keyFigure: {
            name: "Dr. Sandhya Pentareddy",
            role: "Executive Director",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "Planning began for the Chennai campus led by Dr. G. Viswanathan and Dr. Sandhya Pentareddy, Executive Director. The expansion strategy aimed to extend VIT's educational model to Tamil Nadu's capital city with a focus on research and innovation in an urban setting."
    },
    {
        id: 18,
        date: "2010, April 5",
        title: "VIT Chennai Campus Inaugurated",
        description: "VIT Chennai campus was inaugurated by Dr. Manmohan Singh, the then Prime Minister of India, on a sprawling 120-acre campus at Vandalur, beginning a new chapter in VIT's expansion.",
        image: "assets/images/chennai/campus.jpg",
        keyFigure: {
            name: "Dr. Anand A. Samuel",
            role: "First Director of Chennai Campus",
            image: "assets/images/chennai/inauguration.jpg"
        },
        fullDescription: "VIT Chennai campus was inaugurated by Dr. Manmohan Singh, the then Prime Minister of India, on a sprawling 120-acre campus at Vandalur. Dr. Anand A. Samuel was appointed as the first Director of the campus, beginning a new chapter in VIT's expansion."
    },
    {
        id: 19,
        date: "2012",
        title: "Rise in International Student Admissions",
        description: "Significant rise in international student admissions from 40 countries, particularly from Africa and Middle East, creating a truly global learning environment at VIT.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. Sandhya Pentareddy",
            role: "International Relations Director",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "Significant rise in international student admissions from 40 countries, particularly from Africa and Middle East, under the guidance of Dr. Sandhya Pentareddy. International students comprised 10% of the student population, creating a truly global learning environment at VIT."
    },
    {
        id: 20,
        date: "2014",
        title: "30th Anniversary Celebrations",
        description: "The 30th anniversary celebrations were marked by the establishment of VIT Science and Technology Park inaugurated by Dr. A.P.J. Abdul Kalam, former President of India.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. A.P.J. Abdul Kalam",
            role: "Former President of India",
            image: "assets/images/vellore/campus.jpg"
        },
        fullDescription: "The 30th anniversary celebrations were marked by the establishment of VIT Science and Technology Park inaugurated by Dr. A.P.J. Abdul Kalam, former President of India. The event also saw the launch of the Chancellor's Innovation Fund with an initial corpus of Rs. 100 crores."
    },
    {
        id: 21,
        date: "2015, June 25",
        title: "Entry into NIRF and QS Rankings",
        description: "VIT entered the QS World University Rankings and secured 13th position nationwide in NIRF rankings under the leadership of Dr. Anand A. Samuel, Vice-Chancellor.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. Anand A. Samuel",
            role: "Vice-Chancellor",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "VIT entered the QS World University Rankings and secured 13th position nationwide in NIRF rankings under the leadership of Dr. Anand A. Samuel, Vice-Chancellor. VIT also received 4-star rating from QS, becoming one of the first private universities in India to achieve this distinction."
    },
    {
        id: 22,
        date: "2016",
        title: "Planning for New Campuses",
        description: "Planning for new campuses began with feasibility studies conducted by teams led by Dr. Sekar Viswanathan, extending VIT's presence in central and southern India.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. Sekar Viswanathan",
            role: "Vice-President",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "Planning for new campuses began with feasibility studies conducted by teams led by Dr. Sekar Viswanathan. The expansion strategy aimed at establishing VIT's presence in central and southern India to make quality education accessible to more students across the country."
    },
    {
        id: 23,
        date: "2017, September 3",
        title: "VIT Bhopal and VIT-AP Campuses Established",
        description: "VIT Bhopal and VIT-AP (Amaravati) campuses were established under the leadership of Dr. G. Viswanathan, extending VIT's educational model to central and southern India.",
        image: "assets/images/bhopal/campus.jpg",
        keyFigure: {
            name: "Dr. G. Viswanathan",
            role: "Chancellor",
            image: "assets/images/common/gv.jpg"
        },
        fullDescription: "VIT Bhopal and VIT-AP (Amaravati) campuses were established under the leadership of Dr. G. Viswanathan. Dr. P. Gunasekaran was appointed as the first Vice-Chancellor of VIT Bhopal, while Dr. D. Subhakar took charge as the first Vice-Chancellor of VIT-AP."
    },
    {
        id: 24,
        date: "2019",
        title: "Digital Transformation Initiatives",
        description: "Digital transformation initiatives were launched under the guidance of Dr. Rambabu Kodali, Pro-Vice-Chancellor, including smart classrooms and comprehensive ERP systems.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. Rambabu Kodali",
            role: "Pro-Vice-Chancellor",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "Digital transformation initiatives were launched under the guidance of Dr. Rambabu Kodali, Pro-Vice-Chancellor. The initiatives included smart classrooms, digital libraries, and a comprehensive Enterprise Resource Planning (ERP) system for academic and administrative operations."
    },
    {
        id: 25,
        date: "2019, August 20",
        title: "NAAC A++ Accreditation",
        description: "The National Assessment and Accreditation Council (NAAC) awarded VIT an A++ grade with a CGPA of 3.66/4 in its fourth accreditation cycle.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. Anand A. Samuel",
            role: "Vice-Chancellor",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "The National Assessment and Accreditation Council (NAAC) awarded VIT an A++ grade with a CGPA of 3.66/4 in its fourth accreditation cycle. This accolade underscored VIT's excellence in teaching, research, and infrastructure, reinforcing its status as a top-tier Indian university."
    },
    {
        id: 26,
        date: "2020",
        title: "Adaptation to Online Education During COVID-19",
        description: "Adaptation to online education during the COVID-19 pandemic was led by Dr. Jayaraj Poroor, Dean of Academic Research, with proprietary Learning Management System.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. Jayaraj Poroor",
            role: "Dean of Academic Research",
            image: "assets/images/vellore/campus.jpg"
        },
        fullDescription: "Adaptation to online education during the COVID-19 pandemic was led by Dr. Jayaraj Poroor, Dean of Academic Research. VIT quickly transitioned to a fully online teaching model with proprietary Learning Management System (LMS) and conducted virtual laboratories and examinations."
    },
    {
        id: 27,
        date: "2021",
        title: "20th Anniversary of University Status",
        description: "The 20th anniversary of university status was celebrated with the establishment of VIT Research Innovation Fund of Rs. 200 crores announced by Dr. G. Viswanathan.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. G. Viswanathan",
            role: "Chancellor",
            image: "assets/images/common/gv.jpg"
        },
        fullDescription: "The 20th anniversary of university status was celebrated with the establishment of VIT Research Innovation Fund of Rs. 200 crores announced by Dr. G. Viswanathan. The fund aims to support faculty and student research in frontier areas of technology and innovation."
    },
    {
        id: 28,
        date: "2022",
        title: "Expanded International Partnerships",
        description: "International partnerships were expanded with Stanford University, University of Cambridge, and National University of Singapore focusing on joint research programs.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. Ramesh Babu",
            role: "Director of International Relations",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "International partnerships were expanded with Stanford University, University of Cambridge, and National University of Singapore facilitated by Dr. Ramesh Babu, Director of International Relations. These partnerships focus on joint research programs, faculty exchange, and dual degree options."
    },
    {
        id: 29,
        date: "2023, August 1",
        title: "VIT Bengaluru Campus Begins Operations",
        description: "VIT Bengaluru campus began operations at Electronic City under the leadership of Dr. Beela Satyanarayana as the first Vice-Chancellor, focusing on emerging technologies in India's technology hub.",
        image: "assets/images/bengaluru/campus.jpg",
        keyFigure: {
            name: "Dr. Beela Satyanarayana",
            role: "First Vice-Chancellor, VIT Bengaluru",
            image: "assets/images/bengaluru/inauguration.jpg"
        },
        fullDescription: "VIT Bengaluru campus began operations at Electronic City under the leadership of Dr. Beela Satyanarayana as the first Vice-Chancellor. The campus focuses on emerging technologies like Artificial Intelligence, Machine Learning, and Data Science in India's technology hub."
    },
    {
        id: 30,
        date: "2024",
        title: "40th Anniversary Celebrations",
        description: "40th anniversary celebrations are planned with global alumni meet, international conference series, and announcement of VIT Vision 2050 by Dr. G. Viswanathan.",
        image: "assets/images/vellore/campus.jpg",
        keyFigure: {
            name: "Dr. G. Viswanathan",
            role: "Chancellor",
            image: "assets/images/common/gv.jpg"
        },
        fullDescription: "40th anniversary celebrations are planned with global alumni meet, international conference series, and announcement of VIT Vision 2050 by Dr. G. Viswanathan and Dr. Sekar Viswanathan, charting the course for future growth and innovation at VIT."
    },
    {
        id: 31,
        date: "2025",
        title: "Technological Advancements and Future Vision",
        description: "Major technological advancements and future expansion plans include the establishment of VIT Innovation Valley, a 200-acre technology park integrating academia and industry.",
        image: "assets/images/bengaluru/campus.jpg",
        keyFigure: {
            name: "Dr. G.V. Selvam",
            role: "Vice-President",
            image: "assets/images/common/logo.jpg"
        },
        fullDescription: "Major technological advancements and future expansion plans include the establishment of VIT Innovation Valley, a 200-acre technology park integrating academia and industry under the leadership of Dr. G.V. Selvam, Vice-President. By 2025, VIT aims to solidify its position among the top 750 universities globally."
    }
];

// Campus-Specific Timeline Data
const campusTimelineData = {
    vellore: [
        {
            id: "v1",
            date: "1984, July 5",
            title: "Establishment",
            description: "Establishment of Vellore Engineering College by Dr. G. Viswanathan with three undergraduate programs and 180 students on a 15-acre campus.",
            image: "assets/images/vellore/campus.jpg",
            keyFigure: {
                name: "Dr. G. Viswanathan",
                role: "Founder",
                image: "assets/images/common/gv.jpg"
            },
            fullDescription: "Establishment of Vellore Engineering College by Dr. G. Viswanathan with three undergraduate programs and 180 students. The initial 15-acre campus had just one academic block and basic infrastructure for laboratories and classrooms, beginning a journey of educational excellence."
        },
        {
            id: "v2",
            date: "1990, April 28",
            title: "First Graduation",
            description: "First set of alumni graduated with 100% placement record. Notable alumni include Mr. Rajesh Subramaniam (later CEO of FedEx) and Ms. Soundarya Rajinikanth.",
            image: "assets/images/vellore/campus.jpg",
            keyFigure: {
                name: "Mr. Rajesh Subramaniam",
                role: "Notable Alumnus, Later CEO of FedEx",
                image: "assets/images/vellore/campus.jpg"
            },
            fullDescription: "First set of alumni graduated with 100% placement record. Notable alumni from this batch include Mr. Rajesh Subramaniam (later CEO of FedEx) and Ms. Soundarya Rajinikanth (film director and producer). The successful placement of graduates established VEC's reputation for industry-relevant education."
        },
        {
            id: "v3",
            date: "1995",
            title: "Infrastructure Expansion",
            description: "Major infrastructure expansion including the iconic Laura Sexton Memorial Library with over 100,000 volumes and Technology Tower with advanced computing facilities.",
            image: "assets/images/vellore/campus.jpg",
            keyFigure: {
                name: "Prof. V.M. Periasamy",
                role: "Infrastructure Development Lead",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "Major infrastructure expansion including the iconic Laura Sexton Memorial Library with over 100,000 volumes and Technology Tower with advanced computing facilities led by Prof. V.M. Periasamy. This expansion transformed the campus into a modern educational facility."
        },
        {
            id: "v4",
            date: "2001, June 19",
            title: "University Status",
            description: "Elevated to university status and renamed as Vellore Institute of Technology with a distinctive octagonal logo symbolizing all-round development.",
            image: "assets/images/vellore/campus.jpg",
            keyFigure: {
                name: "K.M. Adimoolam",
                role: "Designer of VIT's Octagonal Logo",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "Elevated to university status and renamed as Vellore Institute of Technology. The university introduced its distinctive octagonal logo symbolizing all-round development, designed by renowned artist K.M. Adimoolam, marking a new era in VIT's history."
        },
        {
            id: "v5",
            date: "2005, March 15",
            title: "FFCS Implementation",
            description: "Implementation of FFCS system, making VIT the first university in India to offer complete flexibility in choosing courses, faculty, and scheduling examinations.",
            image: "assets/images/vellore/campus.jpg",
            keyFigure: {
                name: "Dr. V. Raju",
                role: "Vice-Chancellor and FFCS Architect",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "Implementation of FFCS system, making VIT the first university in India to offer complete flexibility in choosing courses, faculty, and scheduling examinations, conceptualized by Dr. V. Raju. This revolutionary system transformed the academic experience for students."
        },
        {
            id: "v6",
            date: "2008",
            title: "Research Parks Established",
            description: "Establishment of research parks in collaboration with IBM, Siemens, and Tata Consultancy Services, facilitating industry-academia integration.",
            image: "assets/images/vellore/campus.jpg",
            keyFigure: {
                name: "Dr. Anand A. Samuel",
                role: "Research Director",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "Establishment of research parks in collaboration with IBM, Siemens, and Tata Consultancy Services under the leadership of Dr. Anand A. Samuel, facilitating industry-academia integration and practical research opportunities for students and faculty."
        },
        {
            id: "v7",
            date: "2010",
            title: "International Student Exchange",
            description: "Introduction of international student exchange programs with universities in 38 countries, providing global exposure to over 500 students annually.",
            image: "assets/images/vellore/campus.jpg",
            keyFigure: {
                name: "Dr. S. Babu",
                role: "International Programs Coordinator",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "Introduction of international student exchange programs with universities in 38 countries, providing global exposure to over 500 students annually, coordinated by Dr. S. Babu. These programs enhanced the global perspective of VIT students."
        },
        {
            id: "v8",
            date: "2015, October 10",
            title: "NIRF Top 10 Recognition",
            description: "Recognition in NIRF top 10 private universities, with particularly high scores in research output and graduate outcomes, establishing VIT's research credentials.",
            image: "assets/images/vellore/campus.jpg",
            keyFigure: {
                name: "Dr. Anand A. Samuel",
                role: "Vice-Chancellor",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "Recognition in NIRF top 10 private universities, with particularly high scores in research output and graduate outcomes. VIT's research publications crossed the milestone of 5,000 papers in Scopus-indexed journals, establishing its research credentials."
        },
        {
            id: "v9",
            date: "2018",
            title: "Laboratory Expansions",
            description: "Major laboratory expansions including the Advanced Materials Research Center and Center for Cyber-Physical Systems with an investment of Rs. 75 crores.",
            image: "assets/images/vellore/campus.jpg",
            keyFigure: {
                name: "Dr. Shekhar C. Mande",
                role: "Director General of CSIR, Inaugurator",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "Major laboratory expansions including the Advanced Materials Research Center and Center for Cyber-Physical Systems with an investment of Rs. 75 crores, inaugurated by Dr. Shekhar C. Mande, Director General of CSIR, enhancing VIT's research infrastructure."
        },
        {
            id: "v10",
            date: "2020, June 30",
            title: "VIT Business School AACSB Accreditation",
            description: "The VIT Business School earned accreditation from the Association to Advance Collegiate Schools of Business (AACSB), becoming the 15th in India to achieve this.",
            image: "assets/images/vellore/campus.jpg",
            keyFigure: {
                name: "Dr. R. Venkataraman",
                role: "Dean, VIT Business School",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "The VIT Business School earned accreditation from the Association to Advance Collegiate Schools of Business (AACSB), becoming the 15th in India to achieve this. This milestone highlighted the school's MBA program quality and faculty research excellence."
        },
        {
            id: "v11",
            date: "2023",
            title: "New Academic Programs",
            description: "New academic programs introduced in emerging fields like Quantum Computing, Blockchain Technology, and Sustainable Engineering, keeping VIT at the cutting edge.",
            image: "assets/images/vellore/campus.jpg",
            keyFigure: {
                name: "Dr. N. Kumaravel",
                role: "Dean of Academic Programs",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "New academic programs introduced in emerging fields like Quantum Computing, Blockchain Technology, and Sustainable Engineering under the guidance of Dr. N. Kumaravel, Dean of Academic Programs, keeping VIT at the cutting edge of technological education."
        },
        {
            id: "v12",
            date: "2025",
            title: "Technological Infrastructure Updates",
            description: "Cutting-edge technological infrastructure updates planned including AI-powered learning systems and virtual reality laboratories as part of the VIT 2050 Vision.",
            image: "assets/images/vellore/campus.jpg",
            keyFigure: {
                name: "Dr. Sekar Viswanathan",
                role: "Vice-President",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "Cutting-edge technological infrastructure updates planned including AI-powered learning systems and virtual reality laboratories as part of the VIT 2050 Vision document prepared by Dr. Sekar Viswanathan, positioning VIT Vellore for future educational challenges."
        }
    ],
    chennai: [
        {
            id: "c1",
            date: "2010, April 5",
            title: "Campus Inauguration",
            description: "Campus inauguration and first academic session with 5 undergraduate programs and 850 students, designed by renowned architect Hafeez Contractor.",
            image: "assets/images/chennai/campus.jpg",
            keyFigure: {
                name: "Dr. Manmohan Singh",
                role: "Prime Minister of India, Inaugurator",
                image: "assets/images/chennai/inauguration.jpg"
            },
            fullDescription: "Campus inauguration and first academic session with 5 undergraduate programs and 850 students. The campus was designed by renowned architect Hafeez Contractor with sustainable building principles, creating a modern educational environment."
        },
        {
            id: "c2",
            date: "2011",
            title: "First Student Batch",
            description: "First batch of students enrolled with special focus on industry-integrated learning, introducing the Practice School concept for hands-on industry experience.",
            image: "assets/images/chennai/campus.jpg",
            keyFigure: {
                name: "Dr. V. Raju",
                role: "Practice School Concept Creator",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "First batch of students enrolled with special focus on industry-integrated learning. Dr. V. Raju introduced the Practice School concept where students spend one semester in industry settings as part of their curriculum, enhancing practical skills."
        },
        {
            id: "c3",
            date: "2013",
            title: "Campus Infrastructure Completion",
            description: "Campus infrastructure completion including the Academic Blocks, Central Library, and Technology Tower with comprehensive facilities for students.",
            image: "assets/images/chennai/campus.jpg",
            keyFigure: {
                name: "P.T. Usha",
                role: "Indian Sports Legend, Inaugurator of Sports Complex",
                image: "assets/images/chennai/campus.jpg"
            },
            fullDescription: "Campus infrastructure completion including the Academic Blocks, Central Library, and Technology Tower. The sports complex with Olympic-sized swimming pool was inaugurated by P.T. Usha, Indian sports legend, providing comprehensive facilities for students."
        },
        {
            id: "c4",
            date: "2015, November 20",
            title: "Research Grants",
            description: "Major research grants received for AI and cybersecurity research from Department of Science and Technology (Rs. 12 crores) and Ministry of Electronics and IT.",
            image: "assets/images/chennai/campus.jpg",
            keyFigure: {
                name: "Dr. Aswani Kumar Cherukuri",
                role: "Research Lead",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "Major research grants received for AI and cybersecurity research from Department of Science and Technology (Rs. 12 crores) and Ministry of Electronics and Information Technology (Rs. 8 crores) under the leadership of Dr. Aswani Kumar Cherukuri."
        },
        {
            id: "c5",
            date: "2017",
            title: "First International Conference",
            description: "First international conference hosted on 'Smart Cities and Urban Innovation' attended by delegates from 22 countries, establishing VIT Chennai as a knowledge hub.",
            image: "assets/images/chennai/campus.jpg",
            keyFigure: {
                name: "Dr. Carlo Ratti",
                role: "MIT Senseable City Lab, Keynote Speaker",
                image: "assets/images/chennai/campus.jpg"
            },
            fullDescription: "First international conference hosted on 'Smart Cities and Urban Innovation' attended by delegates from 22 countries. Dr. Carlo Ratti from MIT Senseable City Lab delivered the keynote address on future urban technologies, establishing VIT Chennai as a knowledge hub."
        },
        {
            id: "c6",
            date: "2019",
            title: "Industry Collaboration Hub",
            description: "Industry collaboration hub established with resident centers for Microsoft, Amazon, and NVIDIA focusing on cloud computing, AI, and deep learning technologies.",
            image: "assets/images/chennai/campus.jpg",
            keyFigure: {
                name: "Dr. B. Amutha",
                role: "Industry Partnerships Coordinator",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "Industry collaboration hub established with resident centers for Microsoft, Amazon, and NVIDIA focusing on cloud computing, AI, and deep learning technologies, coordinated by Dr. B. Amutha, strengthening industry-academia partnerships."
        },
        {
            id: "c7",
            date: "2020",
            title: "Digital Learning Centers",
            description: "Digital learning centers launched with investment of Rs. 25 crores in response to the pandemic, enabling seamless transition to online education.",
            image: "assets/images/chennai/campus.jpg",
            keyFigure: {
                name: "Dr. Ramesh Gayathri",
                role: "Digital Learning Initiative Lead",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "Digital learning centers launched with investment of Rs. 25 crores in response to the pandemic, enabling seamless transition to online education under the guidance of Dr. Ramesh Gayathri, demonstrating VIT's adaptability to challenging circumstances."
        },
        {
            id: "c8",
            date: "2022",
            title: "Research Excellence Recognition",
            description: "Research excellence recognition with Chennai campus researchers publishing over 2,000 papers in high-impact journals and securing 25 patents in technologies.",
            image: "assets/images/chennai/campus.jpg",
            keyFigure: {
                name: "Dr. Anand A. Samuel",
                role: "Vice-Chancellor",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "Research excellence recognition with Chennai campus researchers publishing over 2,000 papers in high-impact journals and securing 25 patents in technologies related to sustainable energy and healthcare innovations, enhancing VIT's research profile."
        },
        {
            id: "c9",
            date: "2024",
            title: "Expansion of Academic Programs",
            description: "Expansion of academic programs to include specialized degrees in Marine Engineering, Aerospace Technology, and Fashion Technology, diversifying educational offerings.",
            image: "assets/images/chennai/campus.jpg",
            keyFigure: {
                name: "Dr. S.R.S. Prabaharan",
                role: "Dean of Academic Programs",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "Expansion of academic programs to include specialized degrees in Marine Engineering, Aerospace Technology, and Fashion Technology under the leadership of Dr. S.R.S. Prabaharan, Dean of Academic Programs, diversifying educational offerings."
        },
        {
            id: "c10",
            date: "2025",
            title: "New Collaborative Research Initiatives",
            description: "New collaborative research initiatives planned with Stanford University and National University of Singapore focused on climate resilience technologies.",
            image: "assets/images/chennai/campus.jpg",
            keyFigure: {
                name: "Dr. Anand A. Samuel",
                role: "Vice-Chancellor",
                image: "assets/images/common/logo.jpg"
            },
            fullDescription: "New collaborative research initiatives planned with Stanford University and National University of Singapore focused on climate resilience technologies and biotechnology applications, furthering VIT Chennai's global research presence."
        }
    ],
    bhopal: [
        {
            id: "b1",
            date: "2017, September 3",
            title: "Inauguration",
            description: "Inauguration and first student batch with 15 undergraduate programs and 1,200 students on a 100-acre site at Kothri Kalan, expanding VIT's footprint to central India.",
            image: "assets/images/bhopal/campus.jpg",
            keyFigure: {
                name: "Shivraj Singh Chouhan",
                role: "Chief Minister of Madhya Pradesh, Inaugurator",
                image: "assets/images/bhopal/inauguration.jpg"
            },
            fullDescription: "Inauguration and first student batch with 15 undergraduate programs and 1,200 students. The campus was inaugurated by Shivraj Singh Chouhan, the then Chief Minister of Madhya Pradesh, on a 100-acre site at Kothri Kalan, expanding VIT's footprint to central India."
        },
        {
            id: "b2",
            date: "2018",
            title: "Initial Campus Infrastructure",
            description: "Completion of initial campus infrastructure including Academic Block, Men's and Women's Hostels, and Sports Complex, creating a comprehensive educational facility.",
            image: "assets/images/bhopal/campus.jpg",
            keyFigure: {
                name: "Dr. P. Gunasekaran",
                role: "Vice-Chancellor",
                image: "assets/images/bhopal/campus.jpg"
            },
            fullDescription: "Completion of initial campus infrastructure including Academic Block, Men's and Women's Hostels, and Sports Complex under the supervision of Dr. P. Gunasekaran, Vice-Chancellor, and Er. G.V. Selvam, Vice-President, creating a comprehensive educational facility."
        },
        {
            id: "b3",
            date: "2019",
            title: "Specialized Engineering Programs",
            description: "Introduction of specialized engineering programs in Smart Manufacturing, Agricultural Technology, and Natural Resources Engineering tailored to central India's development needs.",
            image: "assets/images/bhopal/campus.jpg",
            keyFigure: {
                name: "Dr. Lalitha Bhaskaran",
                role: "Curriculum Development Lead",
                image: "assets/images/bhopal/campus.jpg"
            },
            fullDescription: "Introduction of specialized engineering programs in Smart Manufacturing, Agricultural Technology, and Natural Resources Engineering tailored to central India's development needs, designed by Dr. Lalitha Bhaskaran, addressing regional educational requirements."
        },
        {
            id: "b4",
            date: "2020, March 15",
            title: "International Research Collaboration",
            description: "Research collaboration with top international universities including Purdue University and University of California, Davis in agricultural technology and water resource management.",
            image: "assets/images/bhopal/campus.jpg",
            keyFigure: {
                name: "Dr. Satyajit Ghosh",
                role: "International Collaborations Facilitator",
                image: "assets/images/bhopal/campus.jpg"
            },
            fullDescription: "Research collaboration with top international universities including Purdue University and University of California, Davis in the areas of agricultural technology and water resource management, facilitated by Dr. Satyajit Ghosh, enhancing research partnerships."
        },
        {
            id: "b5",
            date: "2021",
            title: "First Batch of Graduates",
            description: "First batch of graduates with 92% placement rate in companies like Amazon, Microsoft, and Larsen & Toubro, demonstrating the quality of education.",
            image: "assets/images/bhopal/campus.jpg",
            keyFigure: {
                name: "Ms. Priya Sharma",
                role: "Top Graduate with Rs. 44 Lakhs Package",
                image: "assets/images/bhopal/campus.jpg"
            },
            fullDescription: "First batch of graduates with 92% placement rate in companies like Amazon, Microsoft, and Larsen & Toubro. Ms. Priya Sharma from Computer Science Engineering secured the highest package of Rs. 44 lakhs per annum, demonstrating the quality of education."
        },
        {
            id: "b6",
            date: "2022",
            title: "Industry Partnership Programs",
            description: "Industry partnership programs established with Mahindra & Mahindra, Bharat Electronics Limited, and Confederation of Indian Industry creating internship opportunities.",
            image: "assets/images/bhopal/campus.jpg",
            keyFigure: {
                name: "Dr. Amit Kumar Chakrabarty",
                role: "Industry Partnerships Coordinator",
                image: "assets/images/bhopal/campus.jpg"
            },
            fullDescription: "Industry partnership programs established with Mahindra & Mahindra, Bharat Electronics Limited, and Confederation of Indian Industry creating internship opportunities for all students, coordinated by Dr. Amit Kumar Chakrabarty, strengthening industry connections."
        },
        {
            id: "b7",
            date: "2023",
            title: "Innovation Hub Recognition",
            description: "Recognition for innovation centers with the VIT-Bhopal Innovation Hub winning the NationalStartup India Award for promoting technology entrepreneurship in central India.",
            image: "assets/images/bhopal/campus.jpg",
            keyFigure: {
                name: "Dr. Vijayan Gurumurthy",
                role: "Innovation Hub Leader",
                image: "assets/images/bhopal/campus.jpg"
            },
            fullDescription: "Recognition for innovation centers with the VIT-Bhopal Innovation Hub winning the NationalStartup India Award for promoting technology entrepreneurship in central India under the leadership of Dr. Vijayan Gurumurthy, fostering entrepreneurial spirit."
        },
        {
            id: "b8",
            date: "2024",
            title: "Campus Facilities Expansion",
            description: "Expansion of campus facilities including a new Academic Tower, Research Complex, and Innovation Park with an investment of Rs. 150 crores.",
            image: "assets/images/bhopal/campus.jpg",
            keyFigure: {
                name: "Dr. G. Viswanathan",
                role: "Chancellor",
                image: "assets/images/common/gv.jpg"
            },
            fullDescription: "Expansion of campus facilities including a new Academic Tower, Research Complex, and Innovation Park with an investment of Rs. 150 crores announced by Dr. G. Viswanathan during the 7th Foundation Day celebrations, enhancing educational infrastructure."
        },
        {
            id: "b9",
            date: "2025",
            title: "New Academic and Research Initiatives",
            description: "New academic and research initiatives planned in collaboration with the Madhya Pradesh government focusing on sustainable development and rural technology solutions.",
            image: "assets/images/bhopal/campus.jpg",
            keyFigure: {
                name: "Dr. Saji Gopinath",
                role: "Regional Development Initiatives Lead",
                image: "assets/images/bhopal/faculty.jpg"
            },
            fullDescription: "New academic and research initiatives planned in collaboration with the Madhya Pradesh government focusing on sustainable development, tribal empowerment, and rural technology solutions under the guidance of Dr. Saji Gopinath, addressing regional development needs."
        }
    ],
    amaravati: [
        {
            id: "a1",
            date: "2017, September 3",
            title: "Establishment",
            description: "Establishment and academic launch with 4 schools and 12 undergraduate programs, extending VIT's presence to Andhra Pradesh.",
            image: "assets/images/amaravati/campus.jpg",
            keyFigure: {
                name: "N. Chandrababu Naidu",
                role: "Chief Minister of Andhra Pradesh, Foundation Stone Layer",
                image: "assets/images/amaravati/inauguration.jpg"
            },
            fullDescription: "Establishment and academic launch with 4 schools and 12 undergraduate programs. The foundation stone was laid by N. Chandrababu Naidu, the then Chief Minister of Andhra Pradesh, with Dr. D. Subhakar as the founding Vice-Chancellor, extending VIT's presence to Andhra Pradesh."
        },
        {
            id: "a2",
            date: "2018",
            title: "First Phase of Campus Construction",
            description: "Completion of first phase of campus construction on a 200-acre site in Amaravati, winning the International Architecture Award for sustainable campus design.",
            image: "assets/images/amaravati/campus.jpg",
            keyFigure: {
                name: "Perkins+Will",
                role: "Architectural Firm",
                image: "assets/images/amaravati/campus.jpg"
            },
            fullDescription: "Completion of first phase of campus construction on a 200-acre site in Amaravati. The campus master plan, designed by Perkins+Will architectural firm, won the International Architecture Award for sustainable campus design, setting new standards in educational infrastructure."
        },
        {
            id: "a3",
            date: "2019",
            title: "Specialized Programs",
            description: "Introduction of specialized programs in Marine Engineering, Petroleum Engineering, and Biotechnology tailored to the economic priorities of Andhra Pradesh.",
            image: "assets/images/amaravati/campus.jpg",
            keyFigure: {
                name: "Dr. S.V. Kota Reddy",
                role: "Curriculum Development Lead",
                image: "assets/images/amaravati/campus.jpg"
            },
            fullDescription: "Introduction of specialized programs in Marine Engineering, Petroleum Engineering, and Biotechnology tailored to the economic priorities of Andhra Pradesh, developed under the guidance of Dr. S.V. Kota Reddy, addressing regional industry needs."
        },
        {
            id: "a4",
            date: "2020",
            title: "Research in Emerging Technologies",
            description: "Research initiatives in emerging technologies with focus on Blue Economy (marine resources) and renewable energy solutions for coastal regions.",
            image: "assets/images/amaravati/campus.jpg",
            keyFigure: {
                name: "Dr. Jagadish Chandra Mudiganti",
                role: "Research Lead",
                image: "assets/images/amaravati/campus.jpg"
            },
            fullDescription: "Research initiatives in emerging technologies with focus on Blue Economy (marine resources) and renewable energy solutions for coastal regions, led by Dr. Jagadish Chandra Mudiganti receiving grants worth Rs. 18 crores, contributing to regional development."
        },
        {
            id: "a5",
            date: "2021",
            title: "First Batch Graduation",
            description: "First batch graduates with exceptional outcomes including Mr. Sai Abhishek Reddy who founded the startup 'AquaTech Solutions' valued at Rs. 10 crores before graduation.",
            image: "assets/images/amaravati/campus.jpg",
            keyFigure: {
                name: "Mr. Sai Abhishek Reddy",
                role: "Student Entrepreneur",
                image: "assets/images/amaravati/campus.jpg"
            },
            fullDescription: "First batch graduates with exceptional outcomes including Mr. Sai Abhishek Reddy who founded the startup 'AquaTech Solutions' valued at Rs. 10 crores before graduation, mentored by Dr. Anupama Namburu, demonstrating entrepreneurial success."
        },
        {
            id: "a6",
            date: "2022, July 10",
            title: "Digital Learning Excellence",
            description: "Recognition for excellence in digital learning platforms with the VIT-AP Learning System winning the National Education Technology Award for its innovative approach.",
            image: "assets/images/amaravati/campus.jpg",
            keyFigure: {
                name: "Dr. Anupama Namburu",
                role: "Digital Learning Platform Developer",
                image: "assets/images/amaravati/campus.jpg"
            },
            fullDescription: "Recognition for excellence in digital learning platforms with the VIT-AP Learning System winning the National Education Technology Award for its innovative approach combining augmented reality with traditional teaching methods, showcasing educational innovation."
        },
        {
            id: "a7",
            date: "2023",
            title: "International Academic Partnerships",
            description: "International academic partnerships established with National University of Singapore, Nanyang Technological University, and KAIST (Korea Advanced Institute of Science and Technology).",
            image: "assets/images/amaravati/campus.jpg",
            keyFigure: {
                name: "Dr. C.L.V. Sivakumar",
                role: "International Relations Facilitator",
                image: "assets/images/amaravati/campus.jpg"
            },
            fullDescription: "International academic partnerships established with National University of Singapore, Nanyang Technological University, and KAIST (Korea Advanced Institute of Science and Technology) facilitated by Dr. C.L.V. Sivakumar, enhancing global collaborations."
        },
        {
            id: "a8",
            date: "2024",
            title: "Research Facilities Expansion",
            description: "Expansion of research facilities including the Center for Quantum Technologies and Advanced Materials Research Laboratory with funding support from the Department of Science and Technology.",
            image: "assets/images/amaravati/campus.jpg",
            keyFigure: {
                name: "Dr. S.V. Kota Reddy",
                role: "Vice-Chancellor",
                image: "assets/images/amaravati/campus.jpg"
            },
            fullDescription: "Expansion of research facilities including the Center for Quantum Technologies and Advanced Materials Research Laboratory with funding support from the Department of Science and Technology, Government of India, advancing research capabilities."
        },
        {
            id: "a9",
            date: "2025",
            title: "New Centers of Excellence",
            description: "New centers of excellence planned in collaboration with major technology companies including the Microsoft AI Research Center and Google Developer Hub.",
            image: "assets/images/amaravati/campus.jpg",
            keyFigure: {
                name: "Dr. S.V. Kota Reddy",
                role: "Vice-Chancellor",
                image: "assets/images/amaravati/campus.jpg"
            },
            fullDescription: "New centers of excellence planned in collaboration with major technology companies including the Microsoft AI Research Center and Google Developer Hub under the leadership of Dr. S.V. Kota Reddy, fostering innovation and industry partnerships."
        }
    ],
    bengaluru: [
        {
            id: "bg1",
            date: "2023, August 1",
            title: "Campus Opening",
            description: "Campus opens with focus on IT and AI-based programs in Electronic City, the technology hub of Bengaluru under the leadership of Dr. Beela Satyanarayana.",
            image: "assets/images/bengaluru/campus.jpg",
            keyFigure: {
                name: "Basavaraj Bommai",
                role: "Chief Minister of Karnataka, Inaugurator",
                image: "assets/images/bengaluru/inauguration.jpg"
            },
            fullDescription: "Campus opens with focus on IT and AI-based programs in Electronic City, the technology hub of Bengaluru. The inauguration was attended by Basavaraj Bommai, the then Chief Minister of Karnataka, and Dr. Beela Satyanarayana was appointed as the first Vice-Chancellor."
        },
        {
            id: "bg2",
            date: "2023, September",
            title: "First Student Batch",
            description: "First batch of students enrolled with specialized programs in Artificial Intelligence, Data Science, Cybersecurity, and Digital Business from 18 states and 5 countries.",
            image: "assets/images/bengaluru/campus.jpg",
            keyFigure: {
                name: "Dr. Beela Satyanarayana",
                role: "Vice-Chancellor",
                image: "assets/images/bengaluru/campus.jpg"
            },
            fullDescription: "First batch of students enrolled with specialized programs in Artificial Intelligence, Data Science, Cybersecurity, and Digital Business. The founding batch included students from 18 states and 5 countries, creating a diverse learning environment from the start."
        },
        {
            id: "bg3",
            date: "2024, January",
            title: "Initial Infrastructure Completion",
            description: "Completion of initial campus infrastructure including Academic Block Alpha, Research Commons, and Innovation Hub with emphasis on sustainable and smart building technologies.",
            image: "assets/images/bengaluru/campus.jpg",
            keyFigure: {
                name: "Mindspace Architects",
                role: "Award-winning Architecture Firm",
                image: "assets/images/bengaluru/campus.jpg"
            },
            fullDescription: "Completion of initial campus infrastructure including Academic Block Alpha, Research Commons, and Innovation Hub designed by award-winning architects Mindspace Architects with emphasis on sustainable and smart building technologies, creating a modern campus."
        },
        {
            id: "bg4",
            date: "2024, April",
            title: "Industry Partnerships",
            description: "Industry partnerships established with leading technology companies in Bengaluru including Infosys, Wipro, and IBM Research Labs for student internships and research collaborations.",
            image: "assets/images/bengaluru/campus.jpg",
            keyFigure: {
                name: "N.R. Narayana Murthy",
                role: "Co-founder of Infosys, Inaugural Lecturer",
                image: "assets/images/bengaluru/campus.jpg"
            },
            fullDescription: "Industry partnerships established with leading technology companies in Bengaluru including Infosys, Wipro, and IBM Research Labs. Mr. N.R. Narayana Murthy, co-founder of Infosys, delivered the inaugural industry lecture series, strengthening industry connections."
        },
        {
            id: "bg5",
            date: "2025, January",
            title: "Research Initiatives Launch",
            description: "Research initiatives launched focusing on Industry 4.0, Internet of Things, and Smart Manufacturing in collaboration with Indian Institute of Science and technology companies.",
            image: "assets/images/bengaluru/campus.jpg",
            keyFigure: {
                name: "Dr. Beela Satyanarayana",
                role: "Vice-Chancellor",
                image: "assets/images/bengaluru/campus.jpg"
            },
            fullDescription: "Research initiatives launched focusing on Industry 4.0, Internet of Things, and Smart Manufacturing in collaboration with Indian Institute of Science and technology companies in Bengaluru's innovation ecosystem, positioning VIT Bengaluru as a research hub."
        },
        {
            id: "bg6",
            date: "2025, January 15",
            title: "IT Industry Collaboration",
            description: "Strategic partnerships signed with Google and Microsoft for joint R&D in AI and cloud computing, positioning the campus as a hub for tech innovation.",
            image: "assets/images/bengaluru/campus.jpg",
            keyFigure: {
                name: "Dr. Beela Satyanarayana",
                role: "Vice-Chancellor",
                image: "assets/images/bengaluru/campus.jpg"
            },
            fullDescription: "Strategic partnerships signed with Google and Microsoft for joint R&D in AI and cloud computing, positioning the campus as a hub for tech innovation with projected placement rates of 90%+ by the end of 2025, ensuring student career success."
        },
        {
            id: "bg7",
            date: "2025, July",
            title: "Future Expansion Plans",
            description: "Expected growth and future expansion plans announced including acquisition of additional 50 acres of land for Phase II development focusing on research parks and startup incubation facilities.",
            image: "assets/images/bengaluru/campus.jpg",
            keyFigure: {
                name: "Dr. G. Viswanathan",
                role: "Chancellor",
                image: "assets/images/common/gv.jpg"
            },
            fullDescription: "Expected growth and future expansion plans announced including acquisition of additional 50 acres of land for Phase II development focusing on research parks and startup incubation facilities as part of VIT's 2050 Vision, setting the stage for future growth."
        }
    ]
};

// For backward compatibility
campusTimelineData.bangalore = campusTimelineData.bengaluru;

// Developer Information
const developerInfo = {
    name: "Divyanshu Patel",
    about: "A passionate Web Developer and Digital Concept Artist, currently pursuing B.Tech in Computer Science at VIT Chennai. Skilled in frontend development, database management, and networking.",
    contact: {
        email: "divyanshu.patel2023@vitstudent.ac.in",
        github: "github.com/divyanshupatel17",
        linkedin: "linkedin.com/in/patel-divyanshu",
        instagram: "@patel_divyanshu_"
    }
};

// Disclaimer information
const disclaimerInfo = {
    text: "This is not an official website and is developed to demonstrate the VIT story timeline by Divyanshu Patel, a student of VIT Chennai. Note: Some names and images may have been misspelled or displayed incorrectly.",
    year: new Date().getFullYear()
};