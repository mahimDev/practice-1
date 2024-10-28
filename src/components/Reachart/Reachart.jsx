import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Reachart = () => {
    const studentMarks = [
        { id: 1, student: 'Student 1', math: 85, bangla: 80, english: 78 },
        { id: 2, student: 'Student 2', math: 78, bangla: 85, english: 82 },
        { id: 3, student: 'Student 3', math: 92, bangla: 88, english: 90 },
        { id: 4, student: 'Student 4', math: 74, bangla: 75, english: 70 },
        { id: 5, student: 'Student 5', math: 88, bangla: 80, english: 85 },
        { id: 6, student: 'Student 6', math: 91, bangla: 92, english: 89 },
        { id: 7, student: 'Student 7', math: 67, bangla: 70, english: 72 },
        { id: 8, student: 'Student 8', math: 80, bangla: 78, english: 76 },
        { id: 9, student: 'Student 9', math: 76, bangla: 74, english: 79 },
        { id: 10, student: 'Student 10', math: 89, bangla: 90, english: 88 }
    ];


    return (
        <div>
            <LineChart width={600} height={400} data={studentMarks}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line type={"basis"} dataKey="bangla" stroke="green"></Line>
                <Line type={"basis"} dataKey="english" stroke="red"></Line>
                <Line type={"bump"} dataKey="math" stroke="blue"></Line>
            </LineChart>
        </div>
    );
};

export default Reachart;