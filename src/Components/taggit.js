import React, { useState } from 'react'
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export const Taggit = (props) => {

    console.log("suggestion",props)

    const [skilltags, setskilltags] = useState({
        tags: props.data,
        suggestions: props.suggestions
    })

    const handleDelete = (i) => {
        console.log("tags", skilltags.tags)
        setskilltags({
            tags: skilltags.tags.filter((tag, index) => index !== i),
        });
        props.removeelement(skilltags.tags.filter((tag, index) => index !== i))
    }

    const handleAddition = (tag) => {
        setskilltags(state => ({ tags: [...skilltags.tags, tag] }));
        props.addelement([...skilltags.tags, tag])
    }

    const handleDrag = (tag, currPos, newPos) => {
        const tags = [skilltags.tags];
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setskilltags({ tags: newTags });
    }

    const handleTagClick = (index) => {
        console.log('The tag at index ' + index + ' was clicked');
    }

    return (
        <div>
            <ReactTags
                tags={skilltags.tags}
                suggestions={skilltags.suggestions}
                delimiters={delimiters}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                handleTagClick={handleTagClick}
            />
        </div>
    )

}
