// Render here
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const rootElement = document.getElementById('root');
const data = {
    navbar: [
        {
            status: 'list active',
            id : '#home',
            icon: 'home-sharp',
            title: 'Home'
        },
        {
            status: 'list',
            id : '#intro',
            icon: 'paper-plane-sharp',
            title: 'Intro'
        },
        {
            status: 'list',
            id : '#destination',
            icon: 'telescope',
            title: 'Destination'
        },
        {
            status: 'list',
            id : '#idea',
            icon: 'bulb',
            title: 'Why choose us?'
        },
        {
            status: 'list',
            id : '#document',
            icon: 'document',
            title: 'Documents'
        },
        {
            status: 'list',
            id : '#team',
            icon: 'people',
            title: 'Our team'
        },
        {
            status: 'list',
            id : '#contact',
            icon: 'mail',
            title: 'Contact'
        },
    ],
    header: {
        key: 'header',
        logo: './img/logo.png',
        brand: 'Elearning Intelligence',
    },
    intro: {
        key : 'intro',
        title: 'Giới thiệu đề tài',
        leftBLock: {
            key : 'leftBlock',
            color : 'header__slide blue',
            status: 'intro__slide',
            slide: 'text__slide',
            content: [
                'Sự phổ biến của E-learning và Learning Management System (LMS) trong thời đại chuyển đổi số 4.0 và sự chuyển dịch của giáo dục từ hình thức offline sang online giữa tình hình đại dịch Covid.',
                'Dữ liệu sinh từ hoạt động học tập như GPA từ online quiz, test,  interactive videos, tần suất log in, log out lớp học, truy xuất các tài liệu học tập có kích thước rất lớn, tốc độ sinh nhanh và liên tục.',
                'Vì vậy, cần đề xuất mô hình thu gom, xử lý và phân tích dữ liệu lớn. Apache Spark chính là một giải pháp hiệu quả cho dữ liệu lớn. Trong đề tài này, ta sử dụng một giao diện của Python để tận dụng khả năng của Spark, đó là PySpark.'
            ],
        },
        rightUpperBlock: {
            key : 'rightUpperBlock',
            color : 'header__slide Pink',
            status: 'intro__slide small',
            slide: 'text__slide image',
            content: [
                './img/moodle.png',
            ]
        },
        rightLowerBlock: {
            key : 'rightLowerBlock',
            color : 'header__slide Pink',
            status: 'intro__slide small',
            slide: 'text__slide image',
            content: [
                './img/apache-spark.png',
            ]
        }
    },
    destination: {
        key : 'destination',
        title: 'Mục tiêu đề tài',
        textBlock: {
            key : 'textBlock',
            color : 'header__slide purple',
            status: 'intro__slide',
            slide: 'text__slide',
            content: [
                'Mô phỏng việc thu gom dữ liệu hoạt động học tập từ Moodle logs (Moodle là 1 nền tảng e-learning được sử dụng rộng rãi bởi nhiều tổ chức giáo dục).',
                'Tiến hành các bước cần thiết trên dataset từ pre-processing, data exploring, data visualization đến data mining và xây dựng model từ một số thuật toán Machine Learning để dự đoán kết quả. Triển khai trên interface PySpark từ Python để hiểu về PySpark Dataframe, tận dụng các thành phần của Spark như Spark SQL cho việc xử lý và truy vấn dữ liệu cấu trúc hay thư viện MLlib cho các thuật toán ML.',
                'Đề tài có thể mở rộng triển khai trên dữ liệu thời gian thực từ Moodle Site của HCMUT (BKel, BKeX) hoặc các nền tảng E-learning khác theo hướng streaming data sử dụng Apache Kafka.'
            ],
        },
        imageBlock: {
            key: 'imageBlock',
            content: [
                './img/datapreprocessing.png',
                './img/dataexploration.png',
                './img/datamiming.jpg',
                './img/datavisualization.png'
            ]
        }
    },
    idea: {
        key: 'idea',
        title: 'Lộ trình nghiên cứu',
        TaskBlock: {
            key : 'TaskBlock',
            color : 'header__slide',
            status: 'intro__slide',
            slide: 'text__slide',
            content: [
                'Data collection simulation from Moodle.',
                'Dataset Preparation and Description.',
                'Data fetching and pre-processing (PySpark Dataframe format).',
                'Data exploring (statistics, attributes) and visualization.',
                'Data analytics, data mining and ML model application in classification + prediction.'
            ],
        },
        WebPage: {
            key : 'WebPage',
            color : 'header__slide square',
            status: 'intro__slide square',
            slide: 'text__slide',
            browser: 'Google Chrome',
            brand: 'fa-brands fa-chrome',
            button: [
                'fa-solid fa-square-minus green',
                'fa-solid fa-stop orange',
                'fa-solid fa-square-xmark red'
            ],
            content: [
                {
                    symbol: 'fa fa-star',
                    text: 'Apache Spark Offical Website.',
                    link: 'https://spark.apache.org/'
                },
                {
                    symbol: 'fa fa-star',
                    text: 'Apache Kafka Offical Website.',
                    link: 'https://kafka.apache.org/'
                },
                {
                    symbol: 'fa fa-star',
                    text: 'PostgreSQL.',
                    link: 'https://www.postgresql.org/'
                },
                {
                    symbol: 'fa fa-star',
                    text: 'Microsoft Azure Data Lake Storage Service Course.',
                    link: 'https://www.udemy.com/course/microsoft-azure-data-lake/'
                },
                {
                    symbol: 'fa fa-star',
                    text: 'Machine Learning Course.',
                    link: 'https://www.coursera.org/learn/machine-learning'
                },
            ],
        }
    },
    document: {
        key: 'document',
        title: 'Tài liệu tham khảo',
        Paper: {
            key : 'Paper',
            color : 'header__slide square',
            status: 'intro__slide square',
            slide: 'text__slide',
            browser: 'Paper',
            brand: 'fa-brands fa-edge',
            button: [
                'fa-solid fa-square-minus green',
                'fa-solid fa-stop orange',
                'fa-solid fa-square-xmark red'
            ],
            content: [
                {
                    symbol: 'fa fa-book-open',
                    text: 'Applying Data Mining in Moodle, 12/06/2018, Cristóbal Romero Morales.',
                    link: 'https://drive.google.com/file/d/11MuWcfKdhXFOBEA_x7vewxYcmQhtouy-/view'
                },
                {
                    symbol: 'fa fa-book-open',
                    text: 'Real-Time Analysis of Students Activities on an E-Learning Platform based on Apache Spark, Vol.8, No.7, 2017, Abdelmajid Chaffai, Larbi Hassouni, Houda Anoun.',
                    link: 'https://drive.google.com/file/d/1j27Bs6Cw26ZVeBfVBrwMfiF4i5iUzGg-/view'
                },
                {
                    symbol: 'fa fa-book-open',
                    text: 'Integration of open e-learning datasets, Master Degree Thesis, POLITECNICO DI TORINO.',
                    link: 'https://drive.google.com/file/d/1fste3PZL0ExsUjMNI8I5RwPeo-dvlAJP/view'
                },
                {
                    symbol: 'fa fa-book-open',
                    text: 'Development of Machine Learning Models using Study Behavior Predictors of Students Academic Performance Through Moodle, Volume-8, Issue-6S3, April 2019,Edmund D. Evangelista.',
                    link: 'https://drive.google.com/file/d/12E2XcER52hApPStQelgJC4ZKMO8yw068/view'
                },
                {
                    symbol: 'fa fa-book-open',
                    text: 'Other paper related to topic: Data Analytics, Educational Data Mining (EDM), Apache Spark, Kafka ....',
                    link: 'https://www.google.com/'
                },
            ],
        },
        Course: {
            key : 'Course',
            color : 'header__slide square',
            status: 'intro__slide square',
            slide: 'text__slide Course',
            browser: 'Tutorial Source',
            brand: 'fa-brands fa-safari',
            button: [
                'fa-solid fa-circle-minus green',
                'fa-solid fa-circle orange',
                'fa-solid fa-circle-xmark red'
            ],
            content: [
                {
                    symbol: 'fa fa-laptop',
                    text: 'Datacamp.',
                    link: 'https://app.datacamp.com/learn/courses/introduction-to-pyspark'
                },
                {
                    symbol: 'fa fa-laptop',
                    text: 'Coursera.',
                    link: 'https://www.coursera.org/specializations/nosql-big-data-and-spark-foundations'
                },
                {
                    symbol: 'fa fa-laptop',
                    text: 'Youtobe.',
                    link: 'https://www.youtube.com/watch?v=QLGrLFOzMRw&list=PL0hSJrxggIQr6wA8buIn1Yxu810ugGed-'
                },
                {
                    symbol: 'fa fa-laptop',
                    text: 'Microsoft Azure Data WareHouse, Data Lake, Cloud Service Course.',
                    link: 'https://docs.microsoft.com/en-us/learn/azure/'
                },
                {
                    symbol: 'fa fa-laptop',
                    text: 'Kaggle project.',
                    link: 'https://www.kaggle.com/'
                },
                {
                    symbol: 'fa fa-laptop',
                    text: 'Real Python.',
                    link: 'https://realpython.com/pyspark-intro/'
                },
            ],
        },
    },
    team: {
        key: 'team',
        title: 'We are Team 1',
        content: [
            {
                avatar: './img/khoa2.jpg',
                fullName: 'Nguyễn Đặng Anh Khoa',
                position: 'Team Leader',
                intro: 'K20 Khoa Học Máy Tính, ĐH Bách Khoa TPHCM',
                facebook: 'https://www.facebook.com/khoanorman',
                email: 'mailto:khoa.nguyenakaivn@hcmut.edu.vn',
                phone: 'tel:0962646979'
            },
            {
                avatar: './img/an.jpg',
                fullName: 'Nguyễn Đức An',
                position: 'Member',
                intro: 'K20 Khoa Học Máy Tính, ĐH Bách Khoa TPHCM',
                facebook: 'https://www.facebook.com/an.nguyenduc1406/',
                email: 'mailto:an.nguyenduc1406@hcmut.edu.vn',
                phone: 'tel:0852531027'
            },
            {
                avatar: './img/phuc.jpg',
                fullName: 'Huỳnh Nguyên Phúc',
                position: 'Member',
                intro: 'K21 Khoa Học Máy Tính, ĐH Bách Khoa TPHCM',
                facebook: 'https://www.facebook.com/phuc.huynhnguyen.716',
                email: 'mailto:phuc.huynhdaihocbk94@hcmut.edu.vn',
                phone: 'tel:0362020259'
            },
            {
                avatar: './img/minh2.jpg',
                fullName: 'Phạm Đức Minh',
                position: 'Member',
                intro: 'K21 Kỹ Thuật Máy Tính, ĐH Bách Khoa TPHCM',
                facebook: 'https://www.facebook.com/phamdkminh',
                email: 'mailto:phamduc1365@hcmut.edu.vn',
                phone: 'tel:0909712391'
            },
        ]
    },
    contact: {
        key: 'contact',
        title: 'Contact Us',
        map: {
           link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946681007846!2d106.65843061480076!3d10.773374292323556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2sHo%20Chi%20Minh%20City%20University%20of%20Technology!5e0!3m2!1sen!2s!4v1641805580186!5m2!1sen!2s" width="600" height="450',
        },
        info: [
            {
                link: 'https://www.facebook.com/an.nguyenduc1406/',
                icon: 'fab fa-facebook',
                text: 'Connect with me here.'
            },
            {
                link: 'https://github.com/anduc146khmt/BDC_Assignment1',
                icon: 'fab fa-github',
                text: 'Our team project here.'
            },
            {
                link: 'mailto:ducan1406@gmail.com',
                icon: 'fa fa-envelope-open',
                text: 'If you have any question, contact email here.'
            },
        ]
    },
    footer: {
        key: 'footer',
        intro: {
            title: 'About Us',
            text: [
                'Nhóm mình bao gồm các sinh viên đến từ câu lạc bộ Big Data của ĐH Bách Khoa TPHCM, chúng mình có niềm đam mê với Data Science và Web Development.',
                'Rất vui được gặp các bạn, nếu có bất cứ câu hỏi nào, đừng ngại liên lạc với tụi mình nhé.'
            ],
            info: {
                facebook: 'https://www.facebook.com/an.nguyenduc1406/',
                email: 'mailto:an.nguyenduc1406@hcmut.edu.vn',
                phone: 'tel:0852531027'
            }
        },
        workingTime: {
            title: 'Working Time',
            time: [
                {
                    day: 'Monday',
                    workingtime: '9g30 - 18g30'
                },
                {
                    day: 'Tuesday',
                    workingtime: '9g30 - 18g30'
                },
                {
                    day: 'Wednesday',
                    workingtime: '9g30 - 18g30'
                },
                {
                    day: 'Thursday',
                    workingtime: '9g30 - 18g30'
                },
                {
                    day: 'Friday',
                    workingtime: '9g30 - 18g30'
                },
                {
                    day: 'Saturday',
                    workingtime: '9g30 - 18g30'
                },
                {
                    day: 'Sunday',
                    workingtime: '9g30 - 18g30'
                },
            ]
        },
        subscribe: {
            title: 'Subscribe Us',
            text: 'Để lại email để cập nhật những thông tin mới nhất về dự án chúng mình nhé.'
        },
        copyright: {
            text: '&copy 2022 Bản quyền thuộc về Team 1, BDC HCMUT. | Design by',
            link : 'https://github.com/anduc146khmt/BDC_Assignment1',
            author: 'Team 1',
        }
    },
    responsive: {
        key: 'responsive',
        image: 'https://images.squarespace-cdn.com/content/v1/53c54574e4b046e5507a54a7/1540910164814-VCU579ZJU0TWIOQDMV5W/image-asset.octet-stream?format=500w',
        text: 'The responsive version was not supported, please use a desktop screen.'
    },
};
function NavBarItem({element}) {
    return (
        <li className={element.status}>
            <a href = {element.id}>
            <span className="icon">
                <ion-icon name= {element.icon}></ion-icon>
            </span>
            <span className="title">{element.title}</span>  
            </a>
        </li>
    )
};
function Navbar() {
    return (
        <div className="navBar">
        <ul>
            {data.navbar.map((element) => {
                return (
                    <NavBarItem
                    key = {element.id}
                    element = {element}
                />)
            })}
        </ul>
        </div>
    )
 };
function Header({header}) { 
    return (
        <div className="header__content">
          <div className="logo">
            <img src={header.logo} alt="logo" />
            <h1>{header.brand}</h1>
          </div>
          <div className="switch">
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="label">
              <i className="fas fa-moon"></i>
              <i className='fas fa-sun'></i>
              <div className='ball'></div>
            </label>
          </div>
        </div>
    ) 
};
function Home() {
    return (
        <div className="home__content">
          <div className="home__text">
            <span className="hi"> Hi there... </span>
            <h3> We're Now <span> Online! </span> </h3>
            <p className="info"> Big Data: Set To Make A Big Impact In E-Learning </p>
            <div className="home__intro">
              <p className="text"> <i className="fab fa-readme"></i> Educational Data Mining (EDM)</p>
              <p className="text"> <i className="fab fa-telegram-plane"></i>   Big Data Collecting, Processing and Analytics - Apache Spark</p>
            </div>
            <div className="btn">
              <a href="#intro"><button>Learn More</button></a>
            </div>
        </div>
        <div className="home__image">
          <img src="./img/book.png" alt="Book" />
        </div>
        </div>
    )
};
function CircleSlide({props}) {
    return (
        <div className={props.status}>
            <div className= {props.color}>
                <div className="slide__icon">
                    <i className="fa-solid fa-circle orange"></i>
                    <i className="fa-solid fa-circle green"></i>
                    <i className="fa-solid fa-circle red"></i>
                </div>
            </div>
            <div className= {props.slide}>
            {props.content.map((element) => {
                if(element.includes('./img')) {
                    return (
                        <div className="intro__image" key={Math.random().toString()}>
                            <img src={element} alt="" />
                        </div>
                    )
                }
                else {
                    return(
                    <p key={Math.random().toString()}><i className="fa-solid fa-circle"></i>{element}</p>
                    )
                }
            })}
            </div>
        </div>
    )
};
function SquareSlide({props}) {
    return (
        <div className={props.status}>
            <div className={props.color}>
            <div className="slide__icon square">
                <div className="browser">
                <i className={props.brand}></i>
                <h2>{props.browser}</h2>
                </div>
                <div className="btn__icon">
                    {props.button.map((btn)=> {
                        return (
                            <i className= {btn} key={Math.random().toString()}></i>
                        )
                    })}
                </div>
            </div>
            </div>
            <div className={props.slide}>
            {props.content.map((element) => {
                return (
                    <p key={Math.random().toString()}><i className={element.symbol}></i>
                    <a href= {element.link} target="_blank">{element.text} </a></p>
                )
            })}
            </div>
        </div>
    )
}
function Intro({intro}) {
    return (
        <div className="intro__content">
            <div className="intro__text">
                <h1>{intro.title}</h1>
            </div>
            <div className="theme__slide">
                <CircleSlide
                    key = {intro.leftBLock.key} 
                    props = {intro.leftBLock}
                />
                <div className="intro__img">
                    <div className="theme__slide small">
                        <CircleSlide
                            key = {intro.rightLowerBlock.key}  
                            props = {intro.rightUpperBlock}
                        />
                </div>
                    <div className="theme__slide small">
                        <CircleSlide
                            key = {intro.rightLowerBlock.key}  
                            props = {intro.rightLowerBlock}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
function Destination({destination}) {
    return (
        <div className="intro__content">
            <div className="intro__text">
                <h1>{destination.title}</h1>
            </div>
            <div className="theme__slide">
                <CircleSlide 
                    key = {destination.textBlock.key} 
                    props = {destination.textBlock}
                />
            </div>
            <div className="text__pic">
                {destination.imageBlock.content.map((element) => {
                    return (
                        <img src={element} alt="" key={Math.random().toString()}/>
                    )
                })}
            </div>
        </div>
    )
}
function Idea({idea}) {
    return (
        <div className="intro__content">
          <div className="intro__text">
            <h1>{idea.title}</h1>
          </div>
          <div className="theme__slide">
            <CircleSlide 
                key = {idea.TaskBlock.key} 
                props = {idea.TaskBlock}
            />
            <SquareSlide
                key = {idea.WebPage.key}
                props = {idea.WebPage} 
            />
          </div>
        </div>
    )
}
function ContactForm() {
    return (
        <div className="contact__form">
            <form action="">
                <input type="text" name="" id="" placeholder="Name" />
                <input type="text" name="" id="" placeholder="Last Name" />
                <input type="email" name="" id="" placeholder="Email" />
                <input type="tel" name="" id="" placeholder="Phone" />
                <textarea cols="30" rows="10" required placeholder="Message"></textarea>
                <button type ="submit">Send</button>
            </form>
        </div>
    )
}
function Contact({contact}) {
    return (
        <div className="contact">
            <h2>{contact.title}</h2>
            <ContactForm />
            <div className="contact__map">
                <iframe src={contact.map.link} width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="contact__infor">
                {contact.info.map((item) => {
                    return (
                        <div className="contact__item" key={Math.random().toString()}>
                            <a href={item.link} target="_blank"><i className={item.icon}></i></a>
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
function Document({document}) {
    return (
        <div className="intro__content">
          <div className="intro__text">
            <h1>{document.title}</h1>
          </div>
          <div className="theme__slide">
            <SquareSlide 
                key = {document.Paper.key} 
                props = {document.Paper}
            />
            <SquareSlide
                key = {document.Course.key} 
                props = {document.Course}
            />
          </div>
        </div>
    )
}
function Team({team}) {
    return (
        <div className="team__content">
            <h1><i className="fa fa-hand-peace"></i>{team.title}</h1>
            <div className="team__members">
                {team.content.map((member) => {
                    return (
                        <div className="team__member" key={Math.random().toString()}>
                            <div className="avatar">
                                <img src={member.avatar} alt="" />
                                <h2>{member.fullName}</h2>
                                <h4>{member.position}</h4>
                                <p>{member.intro}</p>
                                <div className="team__icon">
                                    <a href={member.facebook} target="_blank"><i className="fa-brands fa-facebook"></i></a>
                                    <a href={member.email} target="_blank"><i className="fa fa-envelope"></i></a>
                                    <a href={member.phone}  target="_blank"><i className="fa fa-phone"></i></a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
function Footer ({footer}) {
    return (
        <React.Fragment>
            <div className="footer__content">
                <div className="footer__item">
                    <h3>{footer.intro.title}</h3>
                    {footer.intro.text.map((element) => {
                        return (
                            <p key={Math.random().toString()}>{element}</p>         
                        )
                    })}
                    <div className="team__icon">
                        <a href={footer.intro.info.facebook} target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href={footer.intro.info.email} target="_blank"><i className="fa fa-envelope"></i></a>
                        <a href={footer.intro.info.phone}  target="_blank"><i className="fa fa-phone"></i></a>
                    </div>
                </div>
                <div className="footer__item">
                    <h3>{footer.workingTime.title}</h3>
                    {footer.workingTime.time.map((element)=> {
                        return (
                            <div className="footer__time" key={Math.random().toString()}>
                                <p>{element.day}</p>
                                <p>{element.workingtime}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="footer__item">
                    <h3>{footer.subscribe.title}</h3>
                    <form className="footer__form">
                    <input type="email" name="email" id="email" placeholder="name@gmail.com" required />
                    <button type = "submit">Send</button>
                    </form>
                    <p>{footer.subscribe.text}</p>
                </div>
            </div>
            <div className="footer__copyright">
                <p>{footer.copyright.text} <span><a href={footer.copyright.link} target = "_blank">{footer.copyright.author}</a></span></p> 
            </div>
        </React.Fragment>
    )
}
function Responsive({responsive}) {
    return (
        <div className="responsive">
            <img src={responsive.image} alt="" />
            <h3>{responsive.text}</h3>
        </div>
    )
}
function App() {
    return (
        <React.Fragment>
            <div className="responsive">
                <Responsive 
                    key = {data.responsive.key}
                    responsive = {data.responsive}
                />
            </div>
            <div className="navigation">
                <Navbar 
                key = "navbar"
                />
            </div>
            <div className="header">
                <Header
                key = {data.header.key}
                header = {data.header}
                />
            </div>
            <div id="home">
                <Home 
                key="home"
                />
            </div>
            <div id="intro">
               <Intro
                key = {data.intro.key} 
                intro = {data.intro}
               />
            </div>
            <div id="destination">
                <Destination 
                    key = {data.destination.key} 
                    destination = {data.destination}
                />
            </div>
            <div id="idea">
                <Idea 
                    key = {data.idea.key} 
                    idea = {data.idea}
                />
            </div>
            <div id="document">
                <Document 
                    key = {data.document.key} 
                    document = {data.document}
                />
            </div>
            <div id="team"> 
                <Team 
                    key = {data.team.key}
                    team = {data.team}
                />
            </div>
            <div id="contact">
                <Contact 
                    key = {data.contact.key}
                    contact = {data.contact}
                />
            </div>
            <footer>
                <Footer 
                    key = {data.footer.key}
                    footer = {data.footer}
                />
            </footer> 
        </React.Fragment>
    )
}
ReactDOM.render(<App />, rootElement);
// State here
const app = {
    activeLink: function() {
        $$('.list').forEach((item)=>item.classList.remove('active'));
        this.classList.add('active');
    },
    handleLink: function() {
        $$('.list').forEach((item)=> item.addEventListener('click', app.activeLink));
    },
    handleSwitch: function() {
        $('#checkbox').addEventListener('change', ()=>{
            document.body.classList.toggle('dark');
            $('.header').classList.toggle('active');
            $('.navigation').classList.toggle('active');
            $$('.navigation ul li a').forEach((item)=>item.classList.toggle('toggle'));
        });
    },
    handleScroll: function() {
        const defaultTop = -100;
        const introTop = $('#intro').offsetTop;
        const destinationTop = $('#destination').offsetTop;
        const ideaTop = $('#idea').offsetTop;
        const documentTop = $('#document').offsetTop;
        const teamTop = $('#team').offsetTop;
        const contactTop = $('#contact').offsetTop;
        document.onscroll = function() {
            if(inRange(window.scrollY, defaultTop, introTop)) {
                $('.list.active').classList.remove('active');
                $('.list').classList.add('active');
            }
            else if(inRange(window.scrollY, introTop, destinationTop)) {
                $('.list.active').classList.remove('active');
                $('.list:nth-child(2)').classList.add('active');
            }
            else if(inRange(window.scrollY, destinationTop, ideaTop)) {
                $('.list.active').classList.remove('active');
                $('.list:nth-child(3)').classList.add('active');
            }
            else if(inRange(window.scrollY, ideaTop, documentTop)) {
                $('.list.active').classList.remove('active');
                $('.list:nth-child(4)').classList.add('active');
            }
            else if(inRange(window.scrollY, documentTop, teamTop)) {
                $('.list.active').classList.remove('active');
                $('.list:nth-child(5)').classList.add('active');
            }
            else if(inRange(window.scrollY, teamTop, contactTop)) {
                $('.list.active').classList.remove('active');
                $('.list:nth-child(6)').classList.add('active');
            }
            else {
                $('.list.active').classList.remove('active');
                $('.list:nth-child(7)').classList.add('active');
            }
        }
    },
    handleEvent: function() {
        this.handleLink();
        this.handleSwitch();
        this.handleScroll();
    },
    start: function() {
        this.handleEvent();
    }
}
function inRange(x, min, max) {
    return x > min && x < max; 
};
app.start();