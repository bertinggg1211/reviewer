import '../styles/Procedure.css';
import glucometer from '../assets/slide_7_image.png';

function Procedure() {
  return (
    <section className="procedure" id="procedure">
      <h2>Capillary Blood Glucose Test Procedure</h2>
      <img src={glucometer} alt="Blood glucose testing" />
      <ol>
        <li>Explain the procedure and gather materials</li>
        <li>Wash hands, wear gloves</li>
        <li>Select and clean finger (3rd or 4th)</li>
        <li>Use lancet to pierce skin and collect drop of blood</li>
        <li>Apply blood to strip, read result</li>
        <li>Dispose materials properly, thank the patient</li>
      </ol>
    </section>
  );
}

export default Procedure;
