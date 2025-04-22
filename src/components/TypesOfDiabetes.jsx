import '../styles/TypesOfDiabetes.css';
import type1 from '../assets/slide_5_image.jpg';
import type2 from '../assets/slide_6_image.jpg';

function TypesOfDiabetes() {
  return (
    <section className="types-diabetes" id="types">
      <h2>Types of Diabetes</h2>
      <div className="diabetes-type">
        <img src={type1} alt="Type 1 Diabetes" />
        <p><strong>Type 1:</strong> Autoimmune reaction prevents insulin production. Requires daily insulin.</p>
      </div>
      <div className="diabetes-type">
        <img src={type2} alt="Type 2 Diabetes" />
        <p><strong>Type 2:</strong> Insulin resistance over time. Most common type. Managed with lifestyle or meds.</p>
      </div>
    </section>
  );
}

export default TypesOfDiabetes;
