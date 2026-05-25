export const ADMIN_IDS = [
  'Welfare Council',
  'Academic Council',
  'Cultural Council',
  'Sports Council',
  'PDC Council',
  'IR&P Council',
  'General Complaints',
]

const adminMap = {
  'Welfare Council':
    'welfare.secretary@iitgn.ac.in',

  'Academic Council':
    'academic.secretary@iitgn.ac.in',

  'Cultural Council':
    'cultural.secretary@iitgn.ac.in',

  'Sports Council':
    'sports.secretary@iitgn.ac.in',

  'PDC Council':
    'pdc.secretary@iitgn.ac.in',

  'IR&P Council':
    'ir&p.secretary@iitgn.ac.in',

  'General Complaints':
    'general.secretary@iitgn.ac.in',
}

export function adminIdToEmail(
  adminId,
) {
  return adminMap[adminId] || ''
}

export function normalizeAdminId(
  adminId,
) {
  return String(
    adminId || '',
  ).trim()
}

export function isAllowedAdminId(
  adminId,
) {
  return ADMIN_IDS.includes(
    adminId,
  )
}

export function emailToAdminId(
  email,
) {
  const entry =
    Object.entries(adminMap).find(
      ([, value]) =>
        value === email,
    )

  return entry?.[0] || ''
}

export function adminIdToScope(
  adminId,
) {
  return adminId
}