# Assignment 1 - Big Data Club

**Đề tài: Thu thập và phân tích hoạt động học tập của người học trên các Learning Management System (LMS)**

Chào mọi người, chúng mình đến từ **nhóm 1, Big Data Club, HCMUT**. Preview of our project [here](http://anduckhmt146.me/BDC_Assignment1/)

# Ý nghĩa đề tài

* Với tốc độ triển khai của giáo dục trực tuyến, lượng dữ liệu được sinh ra từ hoạt động giảng dạy và học tập của các tổ chức giáo dục tăng theo cấp số nhân và là nguồn dữ liệu lớn rất có giá trị không chỉ đối với tổ chức đó mà còn cho các nghiên cứu đề xuất giải pháp nhằm nâng cao chất lượng dạy học của giáo dục quốc gia và trên toàn thế giới. Nguồn dữ liệu có thể được thu gom từ kết quả các bài thi online, từ hệ thống quiz của khóa học và GPA của học sinh - sinh viên; hay từ hoạt động xem các video tương tác (Interactive Video) được upload lên LMS bởi giảng viên khóa học; hay tần suất đăng nhập/đăng xuất lớp học, truy xuất các nguồn tài liệu học tập của người học. Điểm chung của các tập dữ liệu này là kích thước rất lớn, tốc độ sinh nhanh và liên tục.

* Xuất phát từ tình hình thực tế trên, nhóm mong muốn triển khai một dự án nhỏ để thu gom, xử lý, phân tích trên các tập dữ liệu này, và đề xuất một mô hình thông minh dựa trên Trí tuệ Nhân tạo (AI) với mục đích có thể phần nào đó đánh giá được tiến độ, hiệu quả hoạt động dạy & học trực tuyến, so sánh, phân loại các nhóm người học và dự đoán, phát hiện học sinh, sinh viên yếu cũng như đề xuất lộ trình học tập phù hợp. 

# Phạm vi đề tài

* Nhóm sẽ mô phỏng việc lấy dữ liệu hoạt động của người dạy và người học từ Moodle site tự tạo. Đối với tập dữ liệu (dataset) dùng để phân tích và dự đoán, nhóm tham khảo và sử dụng dataset đã được chuẩn bị và đề xuất từ nguồn [zenodo.org](https://zenodo.org/record/5591907#.YiSRLehBy5c)

* Trong dự án này, nhóm tiến hành xử lý, phân tích dữ liệu và đề xuất mô hình Học máy với giải pháp dữ liệu lớn Apache Spark. Cụ thể hơn, nhóm sử dụng một interface của Python để tận dụng khả năng của Spark, đó là PySpark.

# Mục tiêu đề tài
* Thứ nhất, như đã đề cập qua ở phần giới thiệu, nhóm sẽ mô phỏng việc thu gom dữ liệu hoạt động học tập từ hệ thống e-learning Moodle. Cụ thể, nhóm tự tạo ra một Moodle site để có quyền quản trị viên và truy cập vào Report logs của Moodle mô phỏng việc lấy dữ liệu người dùng trong hệ thống.
* Thứ hai, nhóm sẽ vận dụng các kĩ thuật khai phá dữ liệu và tiến hành tất cả các bước cần thiết trên dataset được chuẩn bị sẵn từ tiền xử lý dữ liệu (data preprocessing), khám phá dữ liệu (data exploring), trực quan hóa dữ liệu (data visualization) để có một cái nhìn sâu sắc về dataset, đến bước quan trọng nhất là khai phá dữ liệu (data mining) và áp dụng các mô hình Machine Learning phù hợp trên dataset để dự đoán kết quả. Nhóm sẽ triển khai dự án trên interface PySpark từ Python để hiểu hơn về Spark Dataframe, tận dụng các thành phần của Spark như Spark SQL cho việc xử lý và truy vấn dữ liệu cấu trúc hay thư viện MLlib cho các thuật toán học máy…
* Với hai bước chính của dự án như trên, nhóm hy vọng sẽ xây dựng được một quy trình phù hợp để khai thác và tận dụng những giá trị to lớn mà dữ liệu từ hoạt động dạy học trực tuyến mang lại để giúp cho các tổ chức, trường học nhìn nhận được vấn đề giáo dục thực tiễn của mình, qua đó ngày càng cải thiện quá trình dạy học online và đề xuất được lộ trình học tập hợp lý cho học viên. 
* Ngoài ra, về phía tổ chức giáo dục mà bản thân các thành viên trong nhóm đang được đào tạo trở thành những kỹ sư tương lai - Đại học Bách khoa - ĐHQG Tp.HCM (HCMUT), nhóm hy vọng có thể mở rộng triển khai dự án này trên dữ liệu thời gian thực từ Moodle Site của HCMUT (BKeL, BKeX) theo hướng thu thập dữ liệu phức tạp hơn là thu thập streaming data sử dụng Apache Kafka, sau đó áp dụng quy trình khai phá dữ liệu nhóm đề xuất.

# Các công trình nghiên cứu liên quan

* Ở mục này, vì các thành viên trong nhóm đều là những người mới tiếp cận với lĩnh vực Data Science cũng như những kiến thức chuyên sâu về Data Mining, Machine Learning, Data Analytics còn hạn chế nên ngoài các công trình nghiên cứu liên quan như các bài báo khoa học trong nước và quốc tế, luận văn thạc sĩ, tiến sĩ mà nhóm thu thập được, nhóm sẽ đề xuất thêm các bài giảng, cuốn sách và tài liệu điện tử khác liên quan đến kiến thức về Data Science, Data Mining, Apache Spark,  PySpark… để các thành viên của nhóm cùng tìm hiểu cũng như chia sẻ đến mọi người.

* Update soon...


# Kế hoạch triển khai
* Giai đoạn 1 - Tìm hiểu lý thuyết và thực hành các dự án đơn giản 
Nhóm sẽ sử dụng các nguồn tài liệu học tập đã đề cập ở phần 3.1 để làm nội dung hướng dẫn lý thuyết cho các thành viên. Cụ thể sẽ có 3 phần chính như sau:
  * Phần 1: Tìm hiểu về Apache Spark 
  * Phần 2: Tìm hiểu và thực hành một số dự án đơn giản trên PySpark
  * Phần 3: Tìm hiểu, ôn tập các kiến thức về khai phá dữ liệu
* Giai đoạn 2 - Triển khai dự án chính sau khi nhóm đã vững nền tảng kiến thức.
  * Bước 1. Mô phỏng cách thu thập dữ liệu từ LMS
  * Bước 2. Chuẩn bị dataset
  * Bước 3. Tiền xử lý dữ liệu
  * Bước 4. Khám phá dữ liệu (Data exploring)
  * Bước 5. Xử lý và phân tích dữ liệu 
  * Bước 6. Khai phá dữ liệu và áp dụng các mô hình Học máy.
  
* Thời gian nhóm dự kiến cho giai đoạn này: ~ 1 tháng.

# Thành viên
  * Nguyễn Đặng Anh Khoa (**Team Leader**) - CS K20
  * Nguyễn Đức An - CS K20
  * Huỳnh Nguyên Phúc - CS K21
  * Phạm Đức Minh
# Contact
 Nếu các bạn có câu hỏi hay vấn đề cần thảo luận, contact us [here](ducan1406@gmail.com).

