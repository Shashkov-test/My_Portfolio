import React from "react";
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiReact, DiPython, DiJava, DiRuby, DiMysql } from 'react-icons/di';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { SiRedux, SiCsharp, SiMongodb, SiOracle, SiPostgresql } from 'react-icons/si';

export const skillsData = [
    {
        label: "FRONT END",
        data: [
            {
                skillName: "HTML",
                icon: <AiFillHtml5/>,
                percentageOfKnowledge: "90",
            },

            {
                skillName: "CSS",
                icon: <DiCss3/>,
                percentageOfKnowledge: "70",
            },

            {
                skillName: "JAVASCRIPT",
                icon: <IoLogoJavascript/>,
                percentageOfKnowledge: "80",
            },

            {
                skillName: "REACT.JS",
                icon: <DiReact/>,
                percentageOfKnowledge: "70",
            },

            {
                skillName: "REDUX",
                icon: <SiRedux/>,
                percentageOfKnowledge: "10",
            }
        ]
    },

    {
        label: "BACK END",
        data: [
            {
                skillName: "NODE.JS",
                icon: <IoLogoNodejs/>,
                percentageOfKnowledge: "5",
            },

            {
                skillName: "PYTHON",
                icon: <DiPython/>,
                percentageOfKnowledge: "5",
            },

            {
                skillName: "JAVA",
                icon: <DiJava/>,
                percentageOfKnowledge: "0",
            },

            {
                skillName: "RUBY",
                icon: <DiRuby/>,
                percentageOfKnowledge: "0",
            },

            {
                skillName: "C#",
                icon: <SiCsharp/>,
                percentageOfKnowledge: "5",
            },
        ]
    },

    {
        label: "DATABASES",
        data: [
            {
                skillName: "MYSQL",
                icon: <DiMysql/>,
                percentageOfKnowledge: "10",
            },

            {
                skillName: "MONGODB",
                icon: <SiMongodb/>,
                percentageOfKnowledge: "15",
            },

            {
                skillName: "ORACLE",
                icon: <SiOracle/>,
                percentageOfKnowledge: "5",
            },

            {
                skillName: "POSTGRESQL",
                icon: <SiPostgresql/>,
                percentageOfKnowledge: "0",
            },
        ]
    }
];