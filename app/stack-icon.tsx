import { siReact, siNextdotjs, siTypescript, siNodedotjs, siJavascript, siExpress, siLaravel, siMysql, siMongodb, siZoho, siGit } from 'simple-icons';
const icons: Record<string, {path:string;hex:string}> = {'React':siReact,'Next.js':siNextdotjs,'TypeScript':siTypescript,'Node.js':siNodedotjs,'JavaScript':siJavascript,'Express':siExpress,'Laravel':siLaravel,'MySQL':siMysql,'MongoDB':siMongodb,'Zoho CRM':siZoho,'Git':siGit};
export default function StackIcon({name}:{name:string}) {
 if(name==='AWS') return <svg viewBox="0 0 40 32" aria-hidden="true"><text x="2" y="20" fill="#39414a" fontSize="20" fontFamily="Arial,sans-serif" fontWeight="700">aws</text><path d="M5 25Q20 34 35 24M29 24L35 24L34 29" fill="none" stroke="#ec951c" strokeWidth="2" strokeLinecap="round"/></svg>;
 const icon=icons[name];
 return icon?<svg viewBox="0 0 24 24" aria-hidden="true" fill={'#'+icon.hex}><path d={icon.path}/></svg>:<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M12 8L4 16L12 24M20 8L28 16L20 24" fill="none" stroke="#577b38" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
