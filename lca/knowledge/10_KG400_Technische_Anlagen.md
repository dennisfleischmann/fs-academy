# Themenbereich: Bilanzierung Technische Anlagen (KG 400) und F-Gase
Thema: Sockelbetrag, Wärmeerzeugung, Lüftung, PV, Aufzüge, Batteriespeicher, F-Gase Sonderberechnung
Quelle: Folien 115–140, Audio 2025-12-09 10:45, Audio 2025-12-09 11:17
Status: Experten-geprüft V1.0

---

## Executive Summary
Die technischen Anlagen (KG 400) werden in zwei Schritten bilanziert: Erst der pauschale Sockelbetrag (abhängig vom Effizienzstandard), dann die Einzelerfassung ausgewählter Anlagenteile wie Wärmeerzeuger, Lüftung, PV-Anlage und Batteriespeicher. Bei Verwendung nicht-natürlicher Kältemittel (F-Gase) ist eine Sonderberechnung nach Modul B1 erforderlich. Ab 01.01.2027 dürfen in Effizienzhäusern nur noch Wärmepumpen mit natürlichem Kältemittel eingebaut werden. Der Batteriespeicher wird immer zu 100% dem Gebäude zugeordnet, in dem er installiert ist.

---

## 1. Systemgrenzen KG 400

### Regelwerk (Folien)
Oberkategorien nach DIN 276:

- **KG 410** – Abwasser- und Wasseranlagen (Abläufe, Leitungen, dezentrale Wassererwärmer)
- **KG 420** – Wärmeversorgungsanlagen (Wärmeerzeugung, WW-Versorgung)
- **KG 430** – Raumlufttechnische Anlagen (Lüftung, Klima)
- **KG 440** – Elektrische Anlagen (Leuchten, Ableitungen, Erdungen)
- **KG 450** – Kommunikations-, Sicherheits- und Informationstechnik (Klingel, Türsprech)
- **KG 460** – Förderanlagen (Aufzüge, Rohrpost)

---

## 2. Schritt 1: Sockelbetrag

### Regelwerk (Folien)
Der Sockelbetrag erfasst pauschal alle "Standard"-Bauteile der Haustechnik:

| KG | Pauschal im Sockelbetrag erfasst |
|----|----------------------------------|
| 410 | Steig-/Fallrohrleitungen, Anschlussleitungen, alle Sanitärobjekte |
| 420 | Rohrleitungen, Verteiler, Raumheizflächen |
| 430 | Rohrleitungen, Verteiler, Anschlussleitungen Lüftung |
| 440 | Niederspannungshauptverteiler, Kabel, Leitungen, Unterverteiler |
| 450 | Leerrohre, Kabel, Personenrufanlagen, Klingelanlagen, Türsprechanlagen |

**Auch im Sockelbetrag enthalten:** Elektro-Durchlauferhitzer, Frischwasserstationen.

### Sockelbetrag-Werte (abhängig von Qₚ):

| Energetischer Standard | PE ne MJ/(m²NRF·a) | PE ne kWh/(m²NRF·a) | GWP kg CO₂/(m²NRF·a) |
|------------------------|---------------------|----------------------|-----------------------|
| Qₚ > 40% von Qₚ,Ref | 16,20 | 4,50 | **1,20** |
| Qₚ ≤ 40% (EH 40 oder besser) | 16,92 | 4,70 | **1,30** |

### Praxis-Expertise (Audio)
> **Praxishinweis:** Der Sockelbetrag ist einfach in der Software zu prüfen – man muss nur sicherstellen, dass der richtige Effizienzstandard ausgewählt ist. Bei EH 40 oder besser: 1,30 kg GWP. Das war's für Schritt 1.

---

## 3. Schritt 2: Einzelerfassung (nicht im Sockelbetrag)

### Regelwerk (Folien)
Alle Anlagenteile, die in der Rechenwerttabelle als eigener Datensatz aufgeführt sind, sind NICHT im Sockelbetrag enthalten und müssen separat bilanziert werden.

### KG 421 – Wärmeerzeugungsanlagen (Auszug):

| Komponente | CODE | Austauschzyklus |
|------------|------|-----------------|
| Gas-Brennwertgerät < 20 kW (Wand) | 10.1 | 2 |
| Pelletkessel < 20 kW | 10.12 | 3 |
| Stromwärmepumpe (Luft-Wasser) 7 kW | 10.27 | 2 |
| Stromwärmepumpe (Luft-Wasser) 10 kW | 10.25 | 2 |
| Stromwärmepumpe (Luft-Wasser) 14 kW | 10.26 | 2 |
| Stromwärmepumpe (Wasser-Wasser) 10 kW | 10.34 | 2 |
| Solaranlage Vakuumröhrenkollektor | 10.24 | 2 |
| Solaranlage Flachkollektor | 10.23 | 2 |
| Pufferspeicher (Edelstahl) | 10.69 | 2 |
| Pufferspeicher (Stahl) | 10.70 | 2 |

**Dimensionierungsregel:** Typgleiche Geräte anderer Dimensionierung werden mit der **nächstgelegenen verfügbaren** Dimensionierung berücksichtigt. Beispiel: Luft-Wasser-WP 6 kW → Datensatz 7 kW verwenden.

### KG 431 – Lüftungsanlagen:

| Komponente | CODE | Austauschzyklus |
|------------|------|-----------------|
| Lüfter dezentral mit WRG 60 m³/h | 10.40 | 2 |
| Lüfter dezentral ohne WRG 60 m³/h | 10.39 | 4 |
| Lüfter zentral mit WRG 1000 m³/h | 10.44 | 2 |

### KG 442 – Eigenversorgungsanlagen (PV + Batterie):

| Komponente | CODE | Austauschzyklus |
|------------|------|-----------------|
| PV-System 1000 kWh/m²·a (ohne Stromgutschrift) | 10.48 | 1 |
| PV-System 1200 kWh/m²·a (ohne Stromgutschrift) | 10.49 | 1 |
| LFP-Batterie (pro 1 kWh Speicherkapazität) | 10.50 | 2 |

**Wichtig:** Die beiden PV-Datensätze (10.48 und 10.49) haben **identische Werte** – egal welchen man wählt.

### KG 461 – Aufzugsanlagen:

| Komponente | CODE | Austauschzyklus |
|------------|------|-----------------|
| Fahrstuhl – Grundkomponenten (stockwerkunabhängig) | 10.51 | 1 |
| Fahrstuhl – Komponenten (stockwerkabhängig) | 10.52 | 1 |

**Grundkomponenten:** Fallen einmalig pro Anlage an (Kabine, Tür, Antrieb).
**Stockwerkabhängige Komponenten:** z.B. Schachttüren pro Stockwerk.

**Der Energieaufwand von Aufzugsanlagen wird NICHT berücksichtigt** (im Wohngebäude).

### Praxis-Expertise (Audio)
> **Praxishinweis Lüftung:** Ob 5, 7, 8 oder 10 dezentrale Lüfter verbaut sind – das "macht die Kohle nicht fett". Bei dezentralen Lüftungsanlagen lohnt sich Optimierung kaum.

> **Praxishinweis Pufferspeicher:** Masse in kg im **Leerzustand** angeben, nicht mit Wasser gefüllt!

---

## 4. Beispielrechnung KG 400

### Schritt 1: Sockelbetrag (EH 40)
BG₅₀ = 1,30 kg CO₂/(m²NRF·a)

### Schritt 2: Beispiel Luft-Wasser WP 7 kW
- A1-A3: 321,29
- C3-C4: 24,06
- Austauschzyklus: 2
- GWP Gesamt: (321,29 + 24,06) × 3 = 1.036,05 kg CO₂
- Bei 100 m² NRF: 1.036,05 / (100 × 50) = **0,21 kg CO₂/(m²NRF·a)**

### Zusammengefasst:
GWP Sockelbetrag + GWP Anlagentechnik/(m²NRF × 50a) = 1,3 + 0,21 = **1,51 kg CO₂/(m²NRF·a)**

---

## 5. Selbstnutzungsanteil bei gemeinsamer Nutzung

### Regelwerk
Wenn Einzelgeräte/Anlagenteile auch **weitere Gebäude mitversorgen** oder **Energie an Dritte bereitstellen**: Graue Energien/Emissionen **anteilig des Eigennutzungsanteils** erfassen.

**Ausnahme Batteriespeicher:** Die Bilanzdaten eines Batteriespeichers werden **IMMER dem Gebäude zugeordnet**, in dem er installiert ist – unabhängig von der tatsächlichen Nutzung.

### Praxis-Expertise (Audio)
> **Beispiel:** Wärmepumpe im Garten versorgt zwei Gebäude. Gebäude A nutzt 30%, Gebäude B nutzt 70%. → In der LCA von Gebäude A werden nur 30% der WP bilanziert.
>
> **Absurde Ausnahme Batterie:** Selbst wenn der Batteriespeicher im Keller steht und NUR das Nachbargebäude damit versorgt wird, muss er trotzdem zu 100% im eigenen Gebäude bilanziert werden. "Das muss man nicht verstehen, nur akzeptieren."

---

## 6. F-Gase – Sonderberechnung (Modul B1)

### Regelwerk (Folien)
Bei Einsatz von **nicht-natürlichen Kältemitteln** (z.B. in Wärmepumpen) sind die dadurch verursachten THG-Emissionen in der LCA zu berücksichtigen.

→ Sonderberechnungsvorschrift F-Gase (Anhang 3.3 zur Anlage 3 QNG-Handbuch)

**Ab 01.01.2027:** In Effizienzhäusern dürfen ausschließlich Wärmepumpen mit **natürlichem Kältemittel** eingebaut werden.

### Natürliche Kältemittel (KEINE Sonderberechnung nötig):

| Kältemittel | Name | GWP | Anwendung |
|-------------|------|-----|-----------|
| R290 | Propan | 4 | Wärmepumpe |
| R600a | Isobutan | 4 | Kühlschrank |
| R717 | Ammoniak | 0 | Großwärmepumpe |
| R718 | Wasser | 0 | Kaltwassersatz |
| R744 | Kohlendioxid | 1 | Wärmepumpe |

### Nicht-natürliche Kältemittel (Sonderberechnung NÖTIG):
- R32: GWP 675 → zukunftssicher: "eventuell"
- R410A: GWP 2088 → zukunftssicher: nein
- R134a: GWP 1430 → zukunftssicher: nein
- R454B: GWP 467 → zukunftssicher: "eventuell"

### Formel F-Gase:

```
BG_B1,50,GWP,i = [(Lr,i/100 × Δt) + (Er,i/100 × Az,i)] × Fm,j × GWP,j / Δt
```

| Variable | Bedeutung |
|----------|-----------|
| Lr | Leckagerate in % (Tab. 3) |
| Er | Entsorgungsrate in % (Tab. 3) |
| Fm | Füllmenge Kältemittel in kg (Herstellerangabe) |
| Δt | Betrachtungszeitraum = 50 a |
| Az | Austauschzyklus (Tab. 3) |
| GWP | GWP des Kältemittels (IPCC 4th AR, 2007) |

### Leckage- und Entsorgungsraten:

| Anlagentyp | Leckagerate % | Entsorgungsrate % | Austauschzyklus 50a |
|------------|---------------|--------------------|--------------------|
| Splitgeräte | 5,00 | 49,00 | 4 |
| Wärmepumpen | 2,50 | 35,20 | 2 |
| Chiller | 3,76 | 21,60 | 3 |

### Beispielrechnung (Folien + Audio):
**7,8 kW Split-Luft/Wasser-WP (Viessmann Vitocal 200-S)**
- Kältemittel: R32, Füllmenge 1,5 kg
- BG = [(2,5/100 × 50) + (35,2/100 × 2)] × 1,5 × 675 / 50 = 39,57
- Bei 100 m² NRF: 39,57/100 = **0,396 kg CO₂/(m²NRF·a)**

### Praxis-Expertise (Audio)
> **Kritischer Praxisfall:** Energieberater berechnet LCA in Planungsphase mit natürlichem Kältemittel → 23,8 kg GWP (förderfähig). Kurz vor Fertigstellung wechselt der Kunde die Wärmepumpe zu einem Modell mit R32 → Sonderberechnung F-Gase addiert 0,4 kg → plötzlich 24,2 kg → NICHT mehr förderfähig! Lösung: Entweder alte WP, oder woanders optimieren.

> **KfW-Insider-Info zur Anlagentyp-Zuordnung:** "Eine Luft-Wasser-Wärmepumpe, Sole-Wasser-Wärmepumpe und Wasser-Wasser-Wärmepumpe ist in der Regel eine 'klassische' Wärmepumpe." (O-Ton KfW). Also NICHT als Splitgerät klassifizieren!

> **Je größer das Gebäude, desto geringer der Einfluss** des nicht-natürlichen Kältemittels, weil dieselbe Füllmenge auf mehr NRF verteilt wird. Kleine Einfamilienhäuser sind besonders betroffen.

> **Wichtig für KfW-Kommunikation:** Wenn Antworten der KfW "komisch" klingen, UNBEDINGT nachfragen. Die erste Antwort ist manchmal falsch. "Wir haben teilweise 3-5 Versuche gebraucht, bis eine korrekte Antwort kam."

---

## Begriffs-Glossar

| Begriff | Definition |
|---------|-----------|
| Sockelbetrag | Pauschaler GWP-Wert für Standard-Haustechnik (Rohre, Sanitär, Kabel etc.) |
| F-Gase | Fluorierte Treibhausgase, als Kältemittel in Wärmepumpen verwendet |
| R290 (Propan) | Natürliches Kältemittel mit GWP 4, keine Sonderberechnung nötig |
| R32 | Nicht-natürliches Kältemittel mit GWP 675, Sonderberechnung F-Gase nötig |
| Leckagerate | Jährlicher Verlust an Kältemittel durch Undichtigkeiten (in %) |
| Entsorgungsrate | Anteil des Kältemittels, der bei Entsorgung freigesetzt wird (in %) |
| Grundkomponente | Anlagenteil, das einmalig pro Anlage anfällt (z.B. Aufzugskabine) |

---

## Wichtige Schlagworte
KG 400, Sockelbetrag, Anlagentechnik, Wärmepumpe, Lüftung, PV-Anlage, Batteriespeicher, Aufzug, F-Gase, Kältemittel, R290, R32, Sonderberechnung, Austauschzyklus, Eigennutzungsanteil, Dimensionierung
