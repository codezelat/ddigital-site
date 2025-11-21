export type Service = {
  slug: string;
  title: string;
  heroTitle: string;
  intro: string;
  description: string;
  focus: string[];
  outcomes: string[];
  stats: { label: string; value: string; helper?: string }[];
  imageUrl1: string;
  imageUrl2: string;
  blurUrl: string;
};

export const services: Service[] = [
  {
    slug: "branding",
    title: "Branding",
    heroTitle: "Brand systems that make buyers trust you faster.",
    intro:
      "Evidence-led positioning, messaging, and identity systems that help customers recognise and remember your edge.",
    description:
      "We align leadership, market research, and design craft to deliver a brand platform that is easy for teams to apply and hard for competitors to copy.",
    focus: [
      "Positioning, messaging pillars, and voice kits",
      "Visual identity, logo refresh, and design language systems",
      "Brand guidelines, digital asset kits, and launch playbooks",
    ],
    outcomes: [
      "Confident storytelling across every touchpoint",
      "Frictionless handover to marketing, product, and sales teams",
      "Governance that keeps the brand consistent as you scale",
    ],
    stats: [
      { label: "Engagement lift", value: "+23%", helper: "avg. across recent launches" },
      { label: "Rollout speed", value: "2–4 weeks", helper: "sprint-based delivery" },
    ],
    imageUrl1: "/img/services-hover/1.jpg",
    imageUrl2: "/img/services/1.svg",
    blurUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACMAPUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCvRSUVRItFJRQAtFJRQAtFJRQAtFJRQAtFJRQAtFJRQAtFJRQAtFJRQAtFJRQAtFJRQAtFJRQAtFJRQAtFJRQAtFJRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUFFLijFAhKKXFGKAEopcUYoASilxRigBKKXFGKAEopcUYoASilxRigBKKXFGKAEopcUYoASilxRigBKKXFGKAEopcUYoASilxRigBKKXFGKAEopcUYoASilxRQA7FGKfijFAxmKMU/FGKAGYoxT8UYoAZijFPxRigBmKMU/FGKAGYoxT8UYoAZijFPxRigBmKMU/FGKAGYoxT8UYoAZijFPxRigBmKMU/FGKAGYoxT8UYoAZiin4ooAkxRin4oxSGMxRin4oxQAzFGKfijFADMUYp+KMUAMxRin4oxQAzFGKfijFADMUYp+KMUAMxRin4oxQAzFGKfijFADMUYp+KMUAMxRin4oxQAzFGKfijFADMUYp+KMUAMxRin4oxQAzFGKfijFADMUYp+KMUAMxRin4oxQAzFGKfijFADMUU/FFADsUYpaKAExRilooATFGKWigBMUYpaKAExRilooATFGKWigBMUYpaKAExRilooATFGKWigBMUYpaKAExRilooATFGKWigBMUYpaKAExRS0UAJmjNNzRmgB2aM03NGaAHZozTc0ZoAdmjNNzRmgB2aM03NGaAHZozTc0ZoAdmjNNzRmgB2aM03NGaAHZozTc0ZoAdmjNNzRmgB2aM03NGaAHZozTc0ZoAdmjNNzRmgB2aKbmigBmaM1Fuo3UAS5ozUW6jdQBLmjNRbqN1AEuaM1Fuo3UAS5ozUW6jdQBLmjNRbqN1AEuaM1Fuo3UAS5ozUW6jdQBLmjNRbqN1AEuaKi3UUAMzRmkopALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaKiigD//9k=",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    heroTitle: "Design that ships quickly and stays on-brand.",
    intro:
      "Production-ready design for campaigns, social, pitch decks, and product comms with rigorous quality control and fast turnaround.",
    description:
      "We blend brand stewardship with high-velocity production so every asset feels premium whether it is a carousel, a keynote, or an always-on campaign toolkit.",
    focus: [
      "Campaign creative, social templates, and ad sets",
      "Sales decks, investment pitch materials, and case study kits",
      "Print collateral, event graphics, and motion-ready storyboards",
    ],
    outcomes: [
      "Consistent look-and-feel across every platform",
      "Fewer revisions thanks to upfront guardrails and QA",
      "Scalable design system so internal teams can self-serve",
    ],
    stats: [
      { label: "On-time delivery", value: "98%", helper: "tracked over the past quarter" },
      { label: "Revision cycles", value: "<2", helper: "avg. rounds per asset" },
    ],
    imageUrl1: "/img/services-hover/2.jpg",
    imageUrl2: "/img/services/2.svg",
    blurUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACMAPUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDEop2KMVkajaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdijFADaKdiigBcUYp2KMUxDcUYp2KMUANxRinYoxQA3FGKdijFADcUYp2KMUANxRinYoxQA3FGKdijFADcUYp2KMUANxRinYoxQA3FGKdijFADcUYp2KMUANxRinYoxQA3FGKdijFADcUYp2KMUANxRinYoxQA3FFOxRQAtFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUUUUhhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//2Q==",
  },
  {
    slug: "packaging-design",
    title: "Packaging Design",
    heroTitle: "Packaging that converts browsers into buyers.",
    intro:
      "Shelf-stopping concepts engineered for manufacturability, sustainability, and premium unboxing experiences.",
    description:
      "We validate creative against retail constraints, printing requirements, and shopper psychology so your pack sings in-store and online.",
    focus: [
      "Structural concepts, dielines, and production-ready art files",
      "Material guidance for sustainability and cost efficiency",
      "Mockups, 3D renders, and guidelines for print partners",
    ],
    outcomes: [
      "Packaging that is distinctive, compliant, and easy to produce",
      "Clear value propositions visible within three feet or three seconds",
      "Smooth press checks thanks to vendor-ready specifications",
    ],
    stats: [
      { label: "Retail-ready", value: "100%", helper: "QA checklist for every file" },
      { label: "Time to shelf", value: "4–6 weeks", helper: "concept to pilot run" },
    ],
    imageUrl1: "/img/services-hover/3.jpg",
    imageUrl2: "/img/services/3.svg",
    blurUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABiAJMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC/RTc0ZqiR1FNzRmgB1FNzRmgB1FNzRmgB1FNzRmgB1FNzRmgB1FNzRmgB1FNzRmgB1FNzRmgB1FNzRQA3NGabRQMdmjNNooAdmjNNooAdmjNNooAdmjNNooAdmjNNooAdmjNNooAdmjNNooAdmjNNooAdmim0UAOxRipNtG2kMjxRipNtG2gCPFGKk20baAI8UYqTbRtoAjxRipNtG2gCPFGKk20baAI8UYqTbRtoAjxRipNtG2gCPFGKk20baAI8UVJtooAfijFLmjNAhMUYpc0ZoATFGKXNGaAExRilzRmgBMUYpc0ZoATFGKXNGaAExRilzRmgBMUYpc0ZoATFGKXNGaAExRS5ooAZuo3VDvo30DJt1G6od9G+gCbdRuqHfRvoAm3Ubqh30b6AJt1G6od9G+gCbdRuqHfRvoAm3Ubqh30b6AJt1G6od9G+gCbdRuqHfRvoAm3Ubqh30b6AJt1FV91FADMzWm2UgSgA0m2Uw0APQ5ptlMaAIyabZTBoAjJptlMaAIyabZTBoAjJptlMaAIyabZTBoAjJS7aY0wHZozTaKAHZozTaKAHZozTaKAHZozTaKAHZozTaKAHZozTaKAHZozTaKAHZozTaKAHZpKTTwe9AB9zRmm09AFzRmm0UAO3UbaHfRvoy7dRtod9G+gC7dRtod9G+gC7dRtod9G+gC7dRtod9G+gC7dRtod9G+gC7dRVHeooA//Z",
  },
  {
    slug: "creative-content",
    title: "Creative Content",
    heroTitle: "Content that earns attention and drives action.",
    intro:
      "Script-to-shoot storytelling for campaigns, founder-led content, and social that actually performs.",
    description:
      "We craft narratives with clear hooks, sharp messaging, and platform-native edits so your brand shows up with authority and personality.",
    focus: [
      "Campaign concepts, scripts, and storyboards",
      "Short-form and long-form content for social, web, and events",
      "Always-on content calendars with measurement checkpoints",
    ],
    outcomes: [
      "Content engineered for watch-through and click-through",
      "Founders and subject-matter experts positioned as trusted voices",
      "Reliable production rhythm with pre-approved guardrails",
    ],
    stats: [
      { label: "Watch-through lift", value: "+18%", helper: "vs. prior baselines" },
      { label: "Content cadence", value: "weekly/bi-weekly", helper: "locked-in sprints" },
    ],
    imageUrl1: "/img/services-hover/4.jpg",
    imageUrl2: "/img/services/4.svg",
    blurUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACMAPUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDCxRin7aNtQdIzFGKfto20AMxRin7aNtADMUYp+2jbQAzFGKfto20AMxRin7aNtADMUYp+2jbQAzFGKfto20AMxRin7aNtADMUYp+2jbQAzFGKfto20AMxRin7aNtADMUYp+2jbQAzFGKfto20AMxRin7aNtADMUU/bRQBLto20/FGKQhm2jbT8UYoAZto20/FGKAGbaNtPxRigBm2jbT8UYoAZto20/FGKAGbaNtPxRigBm2jbT8UYoAZto20/FGKAGbaNtPxRigBm2jbT8UYoAZto20/FGKAGbaNtPxRigBm2jbT8UYoAZto20/FGKAGbaKfiigB2KMUtFBImKMUtFACYoxS0UAJijFLRQAmKMUtFACYoxS0UAJijFLRQAmKMUtFACYoxS0UAJijFLRQAmKMUtFACYoxS0UAJijFLRQAmKMUtFACYoxS0UAJiilooAKKKKYgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopaKAEpaKKACiiigAooooAKKKKACiiigAopaKYCUUtFACUUtFACUUtFACUUtFACUUtFACUUtFACUUtFACUUtFACUUtFACUUtFACUUUUAFFFFABRRRSAKSlooASilpKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKWigBKKWimAlFLRQAUUUUAFFFFABRRRQAlFFLSASilooAKKKKACiiigAooooAKKKKACilooASloopgFFFFABRRS0AJRS0UAJRS0UAFFFFABRRRQAUUUUAFFFFMAooopAFFFFABSUtFACUUtFACUUtFACUUUUAFFFFACUUtFACUUUUAFFFFIApKWigBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopaACiiimAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUgCiiigAooooAKKKKACiiigApaKKYBRRRQAUUUtABRRRQAUUUUAFFFLTASilooAKKKKACiiigAooooAKKKKACiiigAooooAKSlooASilooASiiigAooopAJRS0UAJRRRQAUlLRQAlFFFABRRRSASilpKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKYBRRRQAUUUUAFFFFABRS0UAFFFFABRRRQAUUUUwEoooqQCiiigAooooAKKKKAClpKWgAooopgFFFLQAUUUUAFFFFABRRS0wCiiigAooooAKKWigBKWiigAooooAKKKKACiiigBKKWigBKKWkoAKKKKACkpaKAEooooAKKKKQBSUtJQAUUUUAJRS0lABRRRQAUlLSUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClpKWmAUUUUAFFFFABRRRQAUtJS0AFFFFABRRRTAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEooooAKKKKACkpaSgAooopAFJS0lABRRRQAUlLSUAFFFFABSUtJSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaYBRRRQAUUUUAFFFFABS0lLQAUUUUAFFFFABRRRQAUUUUwEoooqQCiiigAooooAKKKKAClpKKAFooopgFLSUUALRRRQAUUUUAFLSUUALRRRQAUUUUAFLSUUALRSUUwFooooAKKKKACiikoAWikooAWkoooAKKKKQBRRSUAFFFFABRRRQAUlLSUAFFFFABSUUUAFFFFABSUtJSAKKKKACiiigAooooAKKKKACiiigAooooAKiiigAooopgFFFFABRRRQAUtJRQAtFFFABRRRQAUUUUAFFFFACUUUUgCiiigAooooAKKKKACiiigBaKSigBaKKKYBRRRQAtFJRQAtFFFABRRRQAtFJRQAtFJS0AFFFFABRRRQAUUUUAFFFFABRRRQAUUlFAC0lFFABRRRQAUUUUAFFJRQAUUUUAFJRRQAUUUUAFFFFIApKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKSloAKKKKACiiimAUUUUAFFFFAC0UlFAC0UlFAC0UlFABRSUUgFopKWgAooooAKKKKACiiigAooooAKKKKACWkpaACiiigAooooAKKKKACiiigAooooAKKKKACiiloAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKiiigApKWigBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWkoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooopgFFFFABRRRQAUUUUAFFFFABRRRQAUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBKKWigBKKWigBKKWigBKKWigBKKWigBKKWigBKKWkoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooASilooASilooASilpKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopaACiiimAUlLSUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUUAP/Z",
  },
  {
    slug: "photography-videography",
    title: "Photography and Videography",
    heroTitle: "Production that captures your brand at its best.",
    intro:
      "From product launches to documentaries, we shoot with strategy ensuring every frame serves a story and a business outcome.",
    description:
      "Our crews handle end-to-end production with meticulous pre-pro, on-set efficiency, and post workflows tuned for multi-platform delivery.",
    focus: [
      "Campaign films, product showcases, and event coverage",
      "Studio and lifestyle photography with creative direction",
      "Post-production, color grading, and platform-specific deliveries",
    ],
    outcomes: [
      "Footage that translates into high-performing edits across channels",
      "On-time shoots with detailed call sheets and risk plans",
      "Consistent look, tone, and pacing that strengthens brand recall",
    ],
    stats: [
      { label: "Shoot punctuality", value: "100%", helper: "tracked across projects" },
      { label: "Delivery formats", value: "4K + social-first", helper: "ready-to-publish masters" },
    ],
    imageUrl1: "/img/services-hover/5.jpg",
    imageUrl2: "/img/services/5.svg",
    blurUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACMAPUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmKKfijFQaDKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfijFADKKfiigB+KMU/FGKYhmKMU/FGKAGYoxT8UYoAZijFPxRigBmKMU/FGKAGYoxT8UYoAZijFPxRigBmKMU/FGKAGYoxT8UYoAZijFPxRigBmKMU/FGKAGYoxT8UYoAZiin4ooAWilooEJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJRS0UAJmjNNzRmgB2aM03NGaAHZozTc0ZoAdmjNNzRmgB2aM03NGaAHZozTc0ZoAdmjNNzRmgB2aM03NGaAHZozTc0ZoAdmjNNzRmgB2aM03NGaAHZozTc0ZoAdmim5ooAbmjNJRQMXNGaSigBc0ZpKKAFzRmkooAXNGaSigBc0ZpKKAFzRmkooAXNGaSigBc0ZpKKAFzRmkooAXNGaSigBc0ZpKKAFzRmkooAXNGaSigBc0ZpKKAFzRSUUAJRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooAWikooASikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRmgBaKTNGaAFopM0ZoAWikzRQAlFJRSGLRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUALRSUUAf//Z",
  },
];

export default services;
