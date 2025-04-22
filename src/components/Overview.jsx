import '../styles/Overview.css';
import overviewImg from '../assets/slide_4_image.png';

function Overview() {
  return (
    <section className="overview-section" id="overview">
      <div className="overview-container">
        <div className="overview-image">
          <img src={overviewImg} alt="Diabetes Overview" />
        </div>
        <div className="overview-text">
          <h2>Overview of Diabetes</h2>
          <p>
            Diabetes is a chronic condition that affects how your body turns food into energy.
            When blood glucose levels rise, the pancreas releases insulin to help glucose enter
            the cells. In diabetic individuals, this process doesn’t function properly, leading to
            prolonged high blood sugar levels.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Overview;
