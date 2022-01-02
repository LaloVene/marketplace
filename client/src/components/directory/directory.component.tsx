import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

// COMPONENTS
import MenuItem from "../menu-item/menu-item.component";
import { Sections } from "../../entities/home/sections";
import { DirectoryMenuContainer } from "./directory.styles";

type MyState = { sections: Sections[] };

const Directory = ({ sections }: MyState) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps}></MenuItem>
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
