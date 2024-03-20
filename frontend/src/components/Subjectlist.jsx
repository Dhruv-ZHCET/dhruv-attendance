import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight } from 'react-icons/hi';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledSidebar = styled(Sidebar)`
  width: 250px;
  background-color: #f4f4f4;
  border-radius: 10px;
  border: 2px solid #ccc;
  margin: 0 auto;
  padding: 20px;
`;

const StyledItem = styled(Sidebar.Item)`
  padding: 15px 20px;
  color: #333;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #e0e0e0;
    transform: translateX(5px);
  }
`;

const StyledHeading = styled.h2`
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const colors = ['#FF5733', '#FFC300', '#33FF57', '#33A7FF', '#FF3366', '#FF5733'];

function SubjectList() {
  const navigate = useNavigate();

  return (
    <StyledSidebar aria-label="Subject sidebar">
      <StyledHeading>Subjects</StyledHeading>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {['Signal and System', 'Discrete Mathematics', 'Numerical Analysis and Probability', 'Software Engineering', 'Design and Analysis of Algorithm', 'Computer Architecture'].map((subject, index) => (
            <StyledItem
              key={index}
              style={{
                background: `linear-gradient(135deg, ${colors[index % colors.length]}, #f4f4f4)`,
                border: `2px solid ${colors[index % colors.length]}`
              }}
              onClick={() => {
                navigate(`/${subject}`);
              }}
            >
              {subject} <HiArrowSmRight />
            </StyledItem>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </StyledSidebar>
  );
}

export default SubjectList;
