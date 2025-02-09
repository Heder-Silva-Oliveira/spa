import React, { useState, useEffect } from "react";
import { FaRegCalendarAlt, FaChevronCircleDown } from "react-icons/fa";
import IconSystem from "../../../assets/IconSystem";
import { useSubjectContext } from "../../../hook/useSubjectContent";
import { useRemarkContext } from "../../../hook/useRemarkContent";

import {
  ContainerRemark,
  ContainerCards,
  CardRemark,
  ButtonCreateRemark,
  DivDate,
  DivDateReturn,
  DivPhoto,
  DivPhotoII,
  Photo,
  DivDadosRemark,
  NameEmail,
  ContainerComplete,
  NoteText,
  IconOpenClose,
  Circle,
  DivGlobalCard,
  IconTag,
  ButtonAdd,
} from "./styles";

const ContentRemarks = (props) => {
  const { subject: subjectsList, setSubject: setSubjectList } =
    useSubjectContext();

  const { id } = useSubjectContext();

  const [status, setStatus] = useState();

  useEffect(() => {
    if (props.title === "Remark") {
      const subject = subjectsList.filter((item) => item.id === props.id)[0];
      setStatus(subject.status);
    }
  }, [id]);

  // Tabs
  const { toggleState, setToggleState } = useSubjectContext();

  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    setActiveTab(index);
    setActiveContent(index);
  };
  const [activeContent, setActiveContent] = useState(0);

  //

  const { remark: remarkList, setRemark: setRemarkList } = useRemarkContext();

  const { idRemark, setIdRemark } = useRemarkContext();

  const [date, setDate] = useState();
  const [dateReturn, setDateReturn] = useState();
  const [noteText, setNoteText] = useState();

  useEffect(() => {
    if (props.title === "Remark") {
      const remark = remarkList.filter(
        (item) => item.idRemark === props.idRemark
      )[0];
      setDate(remark.date);
      setDateReturn(remark.dateReturn);
      setNoteText(remark.noteText);
    }
  }, [idRemark]);

  const remark = remarkList.filter(
    (item) => item.idRemark === props.idRemark
  )[0];

  const handleClick = () => {
    setToggleState(3);
    props.setIdRemark(remark.idRemark);
  };

  return (
    <ContainerRemark>
      <ButtonCreateRemark>
        <ButtonAdd
          $mode={status}
          width="130px"
          padding="0"
          sizeFont="0.9rem"
          boxShadow="none"
          margin="none"
        >
          {" "}
          <span>Create Remark</span>
        </ButtonAdd>
      </ButtonCreateRemark>

      <ContainerCards>
        <CardRemark $mode={status}>
          <DivGlobalCard>
            <DivDate $mode={status}>
              <FaRegCalendarAlt $mode={status} />
              <span> Date </span>
              <p onChange={(event) => setDate(event.target.value)}>{date}</p>
            </DivDate>

            <DivDateReturn $mode={status}>
              <FaRegCalendarAlt $mode={status} />
              <span> Date Return </span>
              <p onChange={(event) => setDateReturn(event.target.value)}>
                {dateReturn}
              </p>
            </DivDateReturn>

            <DivPhoto>
              <DivPhotoII>
                <Photo $mode={status}>GA</Photo>
              </DivPhotoII>
            </DivPhoto>

            <DivDadosRemark>
              <NameEmail>
                Gilberto Anderson Teste
                <span>2534659</span>
              </NameEmail>
            </DivDadosRemark>
          </DivGlobalCard>

          <IconOpenClose $mode={status}>
            <Circle>
              <FaChevronCircleDown onClick={handleClick} />
            </Circle>
          </IconOpenClose>
        </CardRemark>
      </ContainerCards>
    </ContainerRemark>
  );
};

export default ContentRemarks;
