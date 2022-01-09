import React from "react";
import { computeAverage } from "../../lib/computeAverage";
import { Card, CardContent } from "../Styled/Card";
import { ImageBox } from "../Styled/ImageBox";
import { TStudent } from "../types/type";

interface ISCProps {
  student: TStudent
  [x:string]: any
}

const StudentCard = ({ student, ...props }: ISCProps) => {
  return (
    <Card {...props}>
      <ImageBox>
        <img src={student.pic} alt={student.firstName} />
      </ImageBox>
      <CardContent>
        <h5 className="title">
          {student.firstName} {student.lastName}
        </h5>
        <p>
          <b>Email:</b> {student.email}
        </p>
        <p>
          <b>Company:</b> {student.company}
        </p>
        <p>
          <b>Skill:</b> {student.skill}
        </p>
        <p>
          <b>Average:</b> {computeAverage(student.grades)}
        </p>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
