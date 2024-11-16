import { motion } from 'framer-motion';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts';
import { UilTimes } from '@iconscout/react-unicons';
import './card.css';

function Card(props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div layout>
            {expanded ? <ExpandedCard param={props} setExpanded={() => setExpanded(false)} /> : <CompactCard param={props} setExpanded={() => setExpanded(true)} />}
        </motion.div>
    );
}

function CompactCard({ param, setExpanded }) {
    const cardColor = param.color ? param.color : { backGround: 'green', boxShadow: 'none' };
    const title = param.title || 'Progress';
    const barValue = param.barValue || 50;

    return (
        <motion.div className="compact-card"
            style={{
                background: cardColor.backGround,
                boxShadow: cardColor.boxShadow
            }}
            onClick={setExpanded}
            layoutId="expandableCard">
            <div className="radialBar">
                <CircularProgressbar
                    value={barValue}
                    text={`${barValue}%`}
                    styles={{
                        path: {
                            stroke: '#00B5B8',
                            strokeLinecap: 'round',
                            strokeWidth: 10,
                            filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3))',
                        },
                        trail: {
                            stroke: '#d6d6d6',
                        },
                        text: {
                            fill: '#00B5B8',
                            fontSize: '24px',
                        },
                    }}
                />
                <span>{title}</span>
            </div>
            <div className="detail">
                <span>{param.value}</span>
                <span>Last 7 days</span>
            </div>
        </motion.div>
    );
}

function ExpandedCard({ param, setExpanded }) {
    const cardColor = param.color ? param.color : { backGround: 'green', boxShadow: 'none' };
    const seriesData = param.series && Array.isArray(param.series) ? param.series : [2, 3, 1, 4, 5, 2, 3];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const data = {
        options: {
            chart: {
                type: "line",
                height: "auto",
            },
            dropShadow: {
                enabled: true,
                opacity: 0.3,
                blur: 4,
                left: 0,
                top: 5,
            },
            fill: {
                colors: ["#00B5B8"],
                type: "solid",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 4,
                colors: ["#00B5B8"],
                dropShadow: {
                    enabled: true,
                    blur: 5,
                    left: 0,
                    top: 3,
                    opacity: 0.6
                }
            },
            markers: {
                size: 4,
                colors: ["#00B5B8"],
            },
            tooltip: {
                y: {
                    formatter: (value) => `${value} hours`,
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                categories: daysOfWeek,
                title: {
                    text: 'Days',  
                    style: {
                        color: '#00B5B8',
                        fontSize: '14px',
                    },
                },
            },
            yaxis: {
                title: {
                    text: 'Hours',  
                    style: {
                        color: '#00B5B8',
                        fontSize: '14px',
                    },
                },
            },
        },
        series: [
            {
                name: "Progress",
                data: seriesData,
            },
        ],
    };

    return (
        <motion.div className="expanded-card"
            style={{
                background: cardColor.backGround,
                boxShadow: cardColor.boxShadow
            }}
            layoutId="expandableCard">
            <div style={{ alignSelf: 'flex-end', cursor: 'pointer', color: 'white' }}>
                <UilTimes onClick={setExpanded} />
            </div>
            <span>My Progress</span>
            <div className="chart-container">
                <Chart series={data.series} type="line" options={data.options} />
            </div>
            <span>Last 7 days</span>
        </motion.div>
    );
}

export default Card;
