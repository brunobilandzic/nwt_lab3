import { useEffect, useState } from "react";
import axios from "axios";

export const Dropdown = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    axios
      .get("http://demo9694971.mockable.io/tipucenja")
      .then((response) => {
        setOptions(response.data.tipovi);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <select
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}>
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div>Selected option: {selectedOption}</div>
      <SecondDropdown selectedOption={selectedOption} />
    </div>
  );
};

export const SecondDropdown = ({ selectedOption }) => {
  const [options, setOptions] = useState([]);
  const [selectedSecondOption, setSelectedSecondOption] = useState(null);
    useEffect(() => {
      console.log("selectedOption", selectedOption)
    axios
      .get(`http://demo9694971.mockable.io/${selectedOption}`)
      .then((response) => {
        setOptions(response.data.tipovi);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [selectedOption]);
  return (
    <div>
      <div>Second Dropdown:</div>
      <select
        onChange={(e) => {
          setSelectedSecondOption(e.target.value);
        }}>
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div>Selected option: {selectedSecondOption}</div>
    </div>
  );
};
