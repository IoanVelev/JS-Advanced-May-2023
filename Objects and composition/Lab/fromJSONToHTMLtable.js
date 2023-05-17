function fromJSONToHTMLTable(json) {
    let arr = JSON.parse(json);
    let output = [`<table>\n`];
    output.push(`   <tr>`);
    let firstObj = arr[0]
    for (let key in firstObj) {
        output.push(`<th>${escapeHtmlValue(key)}</th>`)
    }
    output.push(`</tr>\n`);
    for (let currentObj of arr) {
        output.push('   ');
        output.push('<tr>')
        for (const key in currentObj) {
            output.push(`<td>${escapeHtmlValue(currentObj[key])}</td>`);
        }
        output.push('</tr>')
        output.push(`\n`)
    }
    function escapeHtmlValue(value){
        return value.toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
    }
    output.push(`</table>`);
    return output.join("");
}
