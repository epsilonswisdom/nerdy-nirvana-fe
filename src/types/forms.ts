/* ---------==== custom forms ====--------- */
export interface VoteManagerFormData {
  value: number;
  profileId: number;
}

export interface AnimeFormData {
  title: string;
  genre: string;
  description: string;
}


/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}
