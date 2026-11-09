# Rebuild docs/TerraNexa-Bylaws.pdf after editing docs/bylaws.md:  pip install reportlab && python build_pdf.py
import re
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, HRFlowable
S=getSampleStyleSheet()
T=ParagraphStyle('t',parent=S['Title'],fontName='Times-Bold',fontSize=20,textColor=HexColor('#0b1220'))
H=ParagraphStyle('h',parent=S['Heading2'],fontName='Times-Bold',fontSize=14,spaceBefore=14,textColor=HexColor('#0b1220'))
B=ParagraphStyle('b',parent=S['BodyText'],fontName='Times-Roman',fontSize=11,leading=15)
f=lambda t:re.sub(r'\*(.+?)\*',r'<i>\1</i>',re.sub(r'\*\*(.+?)\*\*',r'<b>\1</b>',t.replace('&','&amp;').replace('<','&lt;')))
st,items=[],[]
def flush():
    global items
    if items: st.append(ListFlowable([ListItem(Paragraph(f(i),B)) for i in items],bulletType='bullet')); items=[]
for l in open('docs/bylaws.md',encoding='utf8').read().split('\n'):
    if l.startswith('- '): items.append(l[2:]); continue
    flush()
    if l.startswith('# '): st+= [Paragraph(f(l[2:]),T)]
    elif l.startswith('## '): st+=[Paragraph(f(l[3:]),H),HRFlowable(width='100%',color=HexColor('#2dd4bf'))]
    elif l.strip(): st.append(Paragraph(f(l),B)); st.append(Spacer(1,4))
flush()
def foot(c,d):
    c.setFont('Times-Roman',9);c.drawCentredString(306,30,f'TerraNexa Intelligence, LLC — Bylaws — Page {d.page}')
SimpleDocTemplate('docs/TerraNexa-Bylaws.pdf',pagesize=letter,leftMargin=72,rightMargin=72,topMargin=72,bottomMargin=60,title='Bylaws of TerraNexa Intelligence, LLC').build(st,onFirstPage=foot,onLaterPages=foot)
