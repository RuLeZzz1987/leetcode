function isBalanced(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (['[', '(', '{'].includes(s[i])) {
      stack.push(s[i]);
    } else {
      const bracket = stack.pop();

      if (s[i] === ']' && bracket !== '[') return 'NO';
      if (s[i] === ')' && bracket !== '(') return 'NO';
      if (s[i] === '}' && bracket !== '{') return 'NO';
    }
  }
  return 'YES';
}

const strs  = `[()][{}()][](){}([{}(())([[{}]])][])[]([][])(){}{{}{[](){}}}()[]({})[{}{{}([{}][])}]
[()][{}[{}[{}]]][]{}[]{}[]{{}({}(){({{}{}[([[]][[]])()]})({}{{}})})}
(])[{{{][)[)])(]){(}))[{(})][[{)(}){[(]})[[{}(])}({)(}[[()}{}}]{}{}}()}{({}](]{{[}}(([{]
){[]()})}}]{}[}}})}{]{](]](()][{))])(}]}))(}[}{{)}{[[}[]
}(]}){
((]()(]([({]}({[)){}}[}({[{])(]{()[]}}{)}}]]{({)[}{(
{}{({{}})}[][{{}}]{}{}(){{}[]}{}([[][{}]]())
(){}[()[][]]{}(())()[[([])][()]{}{}(({}[]()))()[()[{()}]][]]
()([]({}[]){}){}{()}[]{}[]()(()([[]]()))()()()[]()(){{}}()({[{}][]}[[{{}({({({})})})}]])
[]([{][][)(])}()([}[}(})}])}))]](}{}})[]({{}}))[])(}}[[{]{}]()[(][])}({]{}[[))[[}[}{(]})()){{(]]){][
{()({}[[{}]]()(){[{{}{[[{}]{}((({[]}{}()[])))]((()()))}(()[[[]]])((()[[](({([])()}))[]]))}]})}
()(){{}}[()()]{}{}
{}()([[]])({}){({[][[][[()]]{{}[[]()]}]})}[](())((())[{{}}])
{}(((){}){[]{{()()}}()})[]{{()}{(){()(){}}}}{()}({()(()({}{}()((()((([])){[][{()}{}]})))))})
][[{)())))}[)}}}}[{){}()]([][]){{{{{[)}]]{([{)()][({}[){]({{
{{}(
{[{((({}{({({()})()})[]({()[[][][]]}){}}))){}}]}{}{({((){{}[][]{}[][]{}}[{}])(())}[][])}
()[[][()[]][]()](([[[(){()[[]](([]))}]]]))
()[]({}{})(()){{{}}()()}({[]()}())[](){}(({()}[{}[{({{}}){({}){({})((({()})))}}}]]))
}[{){({}({)})]([}{[}}{[(([])[(}){[]])([]]}(]]]]{][
[{]{[{(){[}{}(([(]}])(){[[}(]){(})))}}{{)}}{}][({(}))]}({)
)})[(]{][[())]{[]{{}}[)[)}[]){}](}({](}}}[}{({()]]
[[[({[]}({[][[[[][[{(()[][])}()[][]][]{}]]]]}))][(()){}]]]()[{}([]{}){}{{}}]
({[]({[]})}())[][{}[{{(({{{([{}])}}}))}}]]
([((()))()])[][][]{}()(([]))[]()[]((){}[]){}(){{}[]}[[{[]}]]
[[(((({}{[]{}()}){}{{}}){({[]{[{}]{(){}(((){()}))}()}}[[]]()()[()])[[{}{}]()]}))]]{}[]{}({({{}})})
(]{()}((
[][(())[({{{()[]}}{[[][[][[[]{{{[()]{{{{}{[]}[][]}}}}}}]]]]}})]]
}[})})}[)]{}{)
({(}{})))}(}[)[}{)}}[)[{][{(}{{}]({}{[(})[{[({{[}{(]]})}
]}})[]))]{][])[}(])]({[]}[]([)
[{{}{[{{[}[[}([]
[([]){}][({})({[(([])[][])][[{}{([{{}{(()){{{({}{{}}())}}[]}}()[()[{{{([](()){[[[]]]})}}}]]}])}]]})]
]{}{(}))}](})[{]]()(]([}]([}][}{]{[])}{{{]([][()){{})[{({{{[}{}](]}}
{[{}}){(}[][)(}[}][)({[[{]}[(()[}}){}{)([)]}(()))]{)(}}}][
(]{}{(}}}[)[
[]{}{[[]]}([{}]{}[]){{(())}}
[)([{(][(){)[)}{)]]}}([((][[}}(]{}]]}]][(({{{))[[){}{]][))[]{]][)[{{}{()]){)])))){{{[(]}[}}{}]
{({(){[[[][]{}[[([]{})]{}]][[]()()]]}})}[{}{{}}]
)}][(})){))[{}[}
{[]{({]}[}}[{([([)([){{}{(}}[]}}[[{[}[[()(])[}[]
()()()[]
((){}])][]][}{]{)]]}][{]}[)(])[}[({(
)[((])(]]]]((]){{{{())]}]}(}{([}(({}]])[[{){[}]{{}})[){(
}][[{[((}{[]){}}[[[)({[)}]]}(]]{[)[]}{}(){}}][{()]))})]][(((}}
([]){}{{}{}}()([([{}{[[]()([(([]()))()[[]]])]}])])
[()[[]{{[]}()([])}[]][][]][]()[]{}{}[][]{}{}[()(){}]
{[{){]({(((({](]{([])([{{([])[}(){(]](]{[{[]}}())[){})}))[{})))[
{}[()[]][]{}{}[[{{[[({})]()[[()]]]}}]]
{[{}[][]]}[((()))][]({})[]{}{()}
(){[{({})}]}
([]])][{)]({)[]))}]())[}]))][}{(}}})){]}]{[)}(][})[[
((({{}(([{}(())]))[()]{[[[]()]]}})))
}()))}(}]]{{})}][{](]][{]{[[]]]}]]}([)({([))[[(]}])}[}(([{)[)]]([[](]}]}{]{{})[]){]}{])(
{}{}{}{[[()]][]}
)]}]({{})[[[{]{{{}}][))]{{
))){({}])}])}}]{)()(}(]}([
([[]][])[[]()][]()(([[]]{[()[]{[][{}]}[()]]{}{[]}}{{}()}(()[([][]{})[[{}][]]{}[]])))
(]{[({}[){)))}]{[{}][({[({[]))}[}]}{()(([]{]()}})}[]{[)](((]]])([]}}]){)(([]]}[[}[
([[]])({}(([(){{}[{}]}]){[{}]}))[][{}{}](){}
[][][][][][([])][]{({()}[[()()]{([(){[]{}}{(())}{[](){}()({}())}[({}[[]()])][]])}])}
}[{{(}})}}(((())()({]{([]((][(({)[({[]]}[])}]{][{{}]{)][}(])}}}))}}}
[]({})()[]{}{}[]({}{})[]{([])()[()][{()({})[{}{[[()]{}[]][]}(({{[]{()()()}{}[]()}[]}){{}{}})]}]}
{{(([{)]{}({][{](){({([[[][)}[)})(
[{}]{[()({[{}]})]}
[[{}]]
]{{({[{]}[[)]]}{}))}{){({]]}{]([)({{[]){)]{}){){}()})(]]{{])(])[]}][[()()}
{[([}[[{{(]]][}()())]{){(){)]]){})}]{][][(}[]())[}[)})})[][{[)[})()][]))}[[}
]()])}[}}}{]]{)[}(}]]])])}{(}{([{]({)]}])(})[{}[)]])]}[]{{)){}{()}]}((}}{({])[}])[]}
(]}[{}{{][}))){{{([)([[])([]{[
{(()[]){}}(){[]}({{}(()())})([]){}{}(())()[()]{}()
{{}[{}[{}[]]]}{}({{[]}})[[(){}][]]{}(([]{[][]()()}{{{()()}{[]}({}[]{()})}{()}[[]][()]}))
{[][]}[{}[](){}]{{}{[][{}]}}
()(){}(){((){}[])([[]]())}
{}[[{[((}[(}[[]{{]([(}]][[
{}[([{[{{}()}]{}}([[{}[]]({}{{()}[][][]})])])]
{[](}([)(])[]]})()]){[({]}{{{)({}(][{{[}}(]{
[][]{{}[](())}{}({[()]}())[][[][({}([{}]))]]
((()))[]{[(()({[()({[]}{})]}))]}{[]}{{({}{})[{}{}]{()([()])[{()}()[[]{}()]{}{}[]()]}[[]{[]}([])]}}`;

const answ = `YES
YES
NO
NO
NO
NO
YES
YES
YES
NO
YES
YES
YES
YES
NO
NO
YES
YES
YES
NO
NO
NO
YES
YES
YES
YES
NO
YES
NO
NO
NO
NO
YES
NO
NO
NO
YES
NO
YES
NO
NO
YES
NO
NO
NO
YES
YES
NO
YES
YES
YES
NO
YES
NO
YES
NO
NO
YES
NO
YES
YES
NO
YES
NO
YES
YES
NO
NO
NO
NO
YES
YES
YES
YES
NO
YES
NO
YES
YES`.split('\n');

// console.log(strs.split('\n').map((str, idx) => {
//   if (isBalanced(str) !== answ[idx]) {
//     return {str, ans: answ[idx]}
//   } else {
//     return null;
//   }
// }).filter(e => e));

console.log(isBalanced('{{}('));