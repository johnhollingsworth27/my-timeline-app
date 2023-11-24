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

  return (
    <Accordion styled fluid>
      {accordionData.map((section, index) => (
        <div key={index}>
          <Accordion.Title
            active={activeIndexes.includes(index)}
            index={index}
            onClick={handleClick}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2in 2in 4in', gap: '20ch' }}>
                <div>{section.title}</div>
                <div>{section.subtitle}</div>
                <div>{section.fields}</div> {/* Add the new field here */}
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndexes.includes(index)}>
          <p style={{ margin: '20px' }}>{section.content}</p> {/* Add margins and padding here */}
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