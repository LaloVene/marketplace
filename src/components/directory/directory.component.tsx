import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import "./directory.styles.scss";

// COMPONENTS
import MenuItem from "../menu-item/menu-item.component";
import { Sections } from "../../entities/home/sections";

type MyState = { sections: Sections[] };

const Directory = ({ sections }: MyState) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps}></MenuItem>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
