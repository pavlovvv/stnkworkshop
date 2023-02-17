export default function SpecialSymbols(): RegExp {
  return /^[^!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~*♪♫♭♮♯°ø☼⊙☉℃℉°ϟ√™℠©®℗♀♂Σ♡★☻☼℃℉°ϟ⚢⚣⚤⚥⚦⚨⚩▲▼◆◎Δ◕#◔Ωʊღ™©®¿¡‽★☆✪✫✯⚝⚹✵❉❋✺✹✸✶✷✵✲✱✧✦⍟⊛❃❂✼✻✰⍣✭≛*٭❅❆⁂☭⚑☭✇∞✕✙✚✛✜♰♱✞✟✠☒☚☛☜☞☟✓✗✘☫☬☥⚳⚴⚵⚶⚷⚸♆⚕⚚☤♤♡♧♢♔♕♖♗♘♙♚♛♜♝♞€£Ұ₴$₰¢₤¥₳₲₪₵元₣₱฿¤₡₮₭₩円₢₥₫₦zł﷼₠₧₯₨Kč←↑→↓↚↛↜↝↞↟↠↡↢↣↤↥↦↧↨↫↬↭↮↯↰↱↲↳↴↵↶↷↸↹↺↻↼↽↾↿⇀⇁⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪■□▢▣▤▥▦▧▨▩▫️▬▭▮▯▰▱◆◇◈◉◊○◌◍◎●◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯░▒▓█❏❐❑❒⊕⊖⊗⊘⊙⊚⊛⊜⊝⊞⊟⊠⊠□▫️▸▹◂◃∅⊜∟∠∡∢∆∇⊲⊳⊴⊵⋈⋉⋊⋋⋌⍢▲△▴▵▷▸▹►▻▼▽▾▿◁◂◃◄◅▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐░▒▓▀▔▕‖∣∤∥∦‗▔▕─━│┃┄┅┆┇┈┉┊┋╌╍╎╏╱╲╳╴╵╶╷╸╹╺╻╼|‑‒–—―†‡┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬™©®¢$€¥£₴‰‱∀∁∂∃∄∅∆∇∈∉∊∋∌∍∎%∏∐∑−∓∔∕∖∗∘∙√∛∜∝∞∟∠∡∢∣∤∥∦∧∨∩∪ƒ∫∬∭∮∯∰∱∲∳∴∵∶∷∸∹∺∻∼∽∾∿≀≁≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨≩≪≫≬≭≮≯≰≱≲≳≴≵≶≷≸≹≺≻≼≽≾≿⊀⊁⊂⊃⊄⊅⊆⊇⊈⊉⊊⊋⊌⊍⊎⊏⊐⊑⊒⊓⊔⊕⊖⊗⊘⊙⊚⊛⊜⊝⊞⊟⊠⊡⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯⊰⊱⊲⊳⊴⊵⊶⊷⊸⊹⊺⊼⊽⊾⊿⋀⋁⋂⋃⋄⋅⋆⋇⋈⋉⋊⋋⋌⋍⋎⋏⋐⋑⋒⋓⋔⋖⋗⋘⋙⋚⋛⋜⋝⋞⋟⋠⋡⋢⋣⋤⋥⋦⋧⋨⋩⋪⋫⋬⋭⋮⋯⋰⋱‹ˆ›ʹʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩־ֿ׀ׂ׃‚„…‘’"”•§¨«»¬¶·¸–—˜!"&'()*,-./‐‑‒–—―‖‗‘’‚‛"”„‟†‡•‣․‥…‧ ′″‴‵‶‷‸‹›※‽‾⁀⁁⁂⁃⁄˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿︰︱︲︳︴︵︶︷︸︹︺︻︼︽︾︿﹀﹁﹂﹃﹄﹉﹊﹋﹌﹍﹎﹏①②③④⑤⑥⑦⑧⑨⑩❶❷❸❹❺❻❼❽❾❿⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳½¼⅕¾⅛⅜⅝⅞⅓⅔⅖⅗⅘⅙⅚ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯↀↁↂꭿ∀₳ǻǻαάǡắắằằẳẵẵäªäåàáâåãâàáãᗩ@ⱥǟℬᏸβ฿ßђᗷᗽᗾᗿɓƀხ␢ᏸᗸᗹᛔ☾ℭℂç¢çčċċĉςĉććčḉḉ⊂ꮸ₡¢ⴚᗫɗďďđđð∂₫ȡᚦᚧℰℯໂ६£ē℮ēėėęěěęέêξêè€é∑ếềểễéèعєєέεҿҿℰℯໂ६£ē℮ēėėęěěęέêξêè€é∑ếềểễéèعєєέεҿҿℰℯໂ६£ē℮ēėėęěěęέêξêè€é∑ếềểễéèعєєέεҿҿℍℋℎℌℏዙꮵĥħħή廾ћђḩһḩ♄ਮℐίιïίîììííîϊΐĩĩīīĭĭi̇įįꭵჟĵĵᶖɉℑ₭ꮶќkќķķҝҝᶄҡҡℒℓŀŀĺĺļļλ₤łłľľḽḽȴꮭℳʍᶆḿḿᗰᙢ爪₥ጠᛖℕηñחñήŋŋńńņņňňŉȵℵ₦หກ⋒ӈӈტóόσǿǿθòóòôôööõõờớọọợợøøόởờớổợōōőℙ℘ρꭾꮅ尸ҏҏᶈ₱☧ᖘק₽թƿҏҏℚqqᶐǭǭჹ૧ℝℜℛ℟ჩᖇřřŗŗŕŕᶉꮢ尺ᚱꮥṧṧȿ§śśššşşŝŝ₰∫$ֆక₸†ttτţţťťŧŧ干ṫṫナꮏꮖテ₮⍡∪ᙀũủừửữựύϋúúΰùûûüửữựüừũũūūŭŭųųűűůůนա✓∨√ꮙṽṽᶌ\/℣₩ẃẃẁẁẅώωŵŵꮤꮃฬᗯᙡẅѡಎಭꮚꮗผฝพฟχ×✗✘᙭ჯẍẍᶍאɣꭹꮍẏẏϒɤ￥ע௶ⴘℤ乙ẑẑɀ]+$/;
}