import React, { useState, useEffect } from 'react';
import { Accordion } from 'semantic-ui-react';
import axios from 'axios';

const AccordionExample = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);
  const [accordionData, setAccordionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://math-data.s3.us-east-2.amazonaws.com/accordion.json');
        setAccordionData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndexes.includes(index)
      ? activeIndexes.filter(i => i !== index)
      : [...activeIndexes, index];
    setActiveIndexes(newIndex);
  };

  const getEraColor = (year) => {
    if (year <= 600) {
      return '#eae4e6'; // Light Blue for Ancient Era
    } else if (year <= 1490) {
      return '#d6c9ca'; // Light Gray for Medieval Era
    } else if (year <= 1877) {
      return '#eae4e6'; // Light Pink for Modern Era
    } else {
      return '#d6c9ca'; // Light Green for Contemporary Era
    }
  };//Era1490,1877
  
  return (
    <Accordion styled fluid>
      {accordionData.map((section, index) => (
        <div key={index}>
          <Accordion.Title
            active={activeIndexes.includes(index)}
            index={index}
            onClick={handleClick}
            style={{ backgroundColor: getEraColor(parseInt(section.title)) }} // Apply background color here
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '3in 2in 5.5in', gap: '5ch' }}>
                <div style={{ fontSize: '20px' }}>{section.subtitle}</div>
                <div style={{ fontSize: '20px' }}>{section.title}</div>
                <div style={{ fontSize: '20px' }}>{section.fields}</div> {/* Add the new field here */}
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndexes.includes(index)}>
            <p style={{ margin: '22px', fontSize: '20px' }}>{section.content}</p> {/* Add margins and padding here */}
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              {section.imageUrls.map((url, imgIndex) => (
                <img key={imgIndex} src={url} alt={`Section ${index} content`} style={{ width: '30%' }} />
              ))}
            </div>
          </Accordion.Content>
        </div>
      ))}
    </Accordion>
  );

}
export default AccordionExample;