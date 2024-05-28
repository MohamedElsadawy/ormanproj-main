import React from "react";
import { Container, Row } from "react-bootstrap";
import PersonCard from "../../Compnents/Personcard/PersonCard";
import Questions from "../../Compnents/Questions/Questions";
import SuccessPart from "../../Compnents/SuccessPart/SuccessPart";
import Elorman from "../../Compnents/Elorman/Elorman";
import ElormanDesc from "../../Compnents/ElormanDesc/ElormanDesc";
import HeaderPhoto from "../../Compnents/HeaderPhoto/HeaderPhoto";
import UseFetch from "../../UseFetch";

const AboutUs = () => {
  const questions = UseFetch("Question");
  const person = UseFetch("Member");

  return (
    <div>
      <HeaderPhoto imageUrl={"../../../assets/ormanback.png"} />
      <ElormanDesc
        img1={"../../../assets/orman.png"}
        img2={"../../../assets/gmyaOrman.png"}
        desc={
          "منظمة مصرية أهلية، غير حكومية، لا تهدف إلى الربح ولا تخضع لضرائب على التبرعات، أنشئت عام 1993 مقيدة برقم 803 مركزية بوزارة التضامن الاجتماعي، تهدف إلى خدمة الفئات الأكثر احتياجًا، دون أي تمييز ديني أو سياسي، وذلك بشكل مؤسسي متطور ويؤكد دور العمل الأهلي فى تنمية المجتمعات اقتصاديًا واجتماعيًا. تعتمد الجمعية في تمويلها على التبرعات العينية والنقدية من المصريين داخل مصر وخارجها."
        }
      />
      <Elorman />
      <ElormanDesc
        img1={"../../../assets/RoayaImg.png"}
        img2={"../../../assets/RoayaImgCollection.png"}
        desc={
          "الانتقال بمفهوم العمل الخيري التطوعي من مجرد الدور الكمالى والمشبع لغريزة العطاء عند بعض الشرائح إلى أن يصبح عمل مؤسسى تنموى منظم يتم بشكل احترافى وينطلق من تحقيق أهدافه من ثقة المتبرعين وجدية المستفيدين وخبرة وكفاءة القائمين عليه."
        }
      />
      <Container fluid="lg">
        <Row>
          {person?.map((item) => {
            const parts = item.imageURL.split("/");
            const fileName = "https://ormantest.runasp.net/SuccessPartenerPhotos/"+parts.pop();
            return (
              <PersonCard
                name={item.name}
                title={item.jopTitle}
                image={fileName}
              />
            );
          })}
        </Row>
      </Container>
      <div style={{ padding: "0 2rem" }}>
        {questions?.map((item, index) => {
          return (
            <Questions title={item.name} answer={item.answer} index={index} />
          );
        })}
      </div>
      <SuccessPart />
    </div>
  );
};

export default AboutUs;
