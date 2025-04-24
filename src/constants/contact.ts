export const ContactInpts = [
  {
    isGroup: true,
    inpts: [
      {
        label: "الاسم بالكامل",
        id: "name",
        type: "text",
        name: "name",
      },
      {
        label: "البريد الإلكتروني",
        id: "email",
        type: "email",
        name: "email",
      },
    ]
  },
  {
    isGroup: true,
    inpts: [
      {
        label: "رقم الهاتف",
        id: "phone",
        type: "tel",
        name: "phone",
      },
      {
        label: "اختر نوع الاستشارة",
        id: "consulation_type",
        type: "select",
        name: "consulation_type",
        opts: [
          {
            text: "استشارة قانونية شخصية",
            value: "استشارة قانونية شخصية",
          },
          {
            text: "استشارة تجارية",
            value: "استشارة تجارية",
          },
          {
            text: "مراجعة عقد",
            value: "مراجعة عقد",
          },
          {
            text: "قضايا أحوال شخصية",
            value: "قضايا أحوال شخصية",
          },
          {
            text: "أخرى",
            value: "أخرى",
          },
        ]
      },
    ]
  },
  {
    label: "تفاصيل مختصرة عن استشارتك",
    id: "message",
    type: "textarea",
    name: "message",
  },
  {
    isGroup: true,
    inpts: [
      {
        label: "تحديد تاريخ للإستشارة",
        id: "preferred_date",
        type: "date",
        name: "preferred_date",
      },
      {
        label: "تحديد وقت",
        id: "preferred_time",
        type: "time",
        name: "preferred_time",
      },
    ]
  },
]